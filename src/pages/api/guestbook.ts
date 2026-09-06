import type { APIRoute } from "astro";
import { getSql, hashIp, clientIp } from "../../lib/db";

export const prerender = false;

const PER_PAGE = 10;
const RATE_LIMIT_MINUTES = 10;

const MAX = { name: 40, website: 120, message: 400 };

/** neon() vracia širokú úniu typov; v tomto súbore sú to vždy riadky. */
type Row = Record<string, unknown>;
const rows = (result: unknown): Row[] => result as Row[];

const json = (body: unknown, status = 200, headers: Record<string, string> = {}) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...headers },
  });

export const GET: APIRoute = async ({ url }) => {
  const sql = getSql();
  if (!sql) return json({ error: "offline", entries: [], total: 0, page: 1, totalPages: 0 }, 503);

  const page = Math.max(1, Number.parseInt(url.searchParams.get("page") ?? "1", 10) || 1);

  try {
    const [counted] = rows(await sql`select count(*)::int as total from guestbook`);
    const total = (counted?.total as number) ?? 0;
    const totalPages = Math.max(1, Math.ceil(total / PER_PAGE));
    const safePage = Math.min(page, totalPages);

    const entries = rows(await sql`
      select id, name, website, message, created_at
      from guestbook
      order by created_at desc
      limit ${PER_PAGE}
      offset ${(safePage - 1) * PER_PAGE}
    `);

    // no-store: zoznam sa mení pri každom príspevku a klient si po odoslaní
    // hneď pýta čerstvú stránku 1 — zdieľaná cache (CDN) by mu na 30s vracala
    // stav spred submitu, akoby sa nový odkaz vôbec neuložil.
    return json(
      { entries, total, page: safePage, totalPages },
      200,
      { "Cache-Control": "no-store" },
    );
  } catch (error) {
    console.error("guestbook GET failed:", error);
    return json({ error: "offline", entries: [], total: 0, page: 1, totalPages: 0 }, 503);
  }
};

export const POST: APIRoute = async ({ request }) => {
  const sql = getSql();
  if (!sql) return json({ error: "offline" }, 503);

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return json({ error: "invalid" }, 400);
  }

  // Pasca na roboty: pole je v formulári skryté, človek ho nevyplní.
  if (typeof body.company === "string" && body.company.trim() !== "") {
    return json({ ok: true }, 201);
  }

  const name = String(body.name ?? "").trim();
  const message = String(body.message ?? "").trim();
  const websiteRaw = String(body.website ?? "").trim();
  const lang = body.lang === "en" ? "en" : "sk";

  if (!name || name.length > MAX.name) return json({ error: "name" }, 400);
  if (!message || message.length > MAX.message) return json({ error: "message" }, 400);

  let website: string | null = null;
  if (websiteRaw) {
    let parsed: URL;
    try {
      parsed = new URL(websiteRaw);
    } catch {
      return json({ error: "url" }, 400);
    }
    if (!["http:", "https:"].includes(parsed.protocol)) return json({ error: "url" }, 400);
    if (parsed.href.length > MAX.website) return json({ error: "url" }, 400);
    website = parsed.href;
  }

  try {
    const ipHash = await hashIp(clientIp(request));

    const [recent] = rows(await sql`
      select 1 from guestbook
      where ip_hash = ${ipHash}
        and created_at > now() - (${RATE_LIMIT_MINUTES} || ' minutes')::interval
      limit 1
    `);
    if (recent) return json({ error: "rate" }, 429);

    const [entry] = rows(await sql`
      insert into guestbook (name, website, message, lang, ip_hash)
      values (${name}, ${website}, ${message}, ${lang}, ${ipHash})
      returning id, name, website, message, created_at
    `);

    return json({ ok: true, entry }, 201);
  } catch (error) {
    console.error("guestbook POST failed:", error);
    return json({ error: "generic" }, 500);
  }
};
