import type { APIRoute } from "astro";
import { getSql, hashIp, clientIp } from "../../lib/db";

export const prerender = false;

const RATE_LIMIT_MINUTES = 10;
const MAX = { name: 60, email: 120, message: 2000 };

/** Zámerne voľná kontrola — na tvrdé overenie je len odpoveď na e-mail. */
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

export const POST: APIRoute = async ({ request }) => {
  const sql = getSql();
  if (!sql) return json({ error: "offline" }, 503);

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return json({ error: "generic" }, 400);
  }

  // Honeypot — skryté pole, ktoré človek nevyplní.
  if (typeof body.company === "string" && body.company.trim() !== "") {
    return json({ ok: true }, 201);
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();
  const lang = body.lang === "en" ? "en" : "sk";

  if (!name || name.length > MAX.name) return json({ error: "name" }, 400);
  if (!email || email.length > MAX.email || !EMAIL.test(email)) {
    return json({ error: "email" }, 400);
  }
  if (!message || message.length > MAX.message) return json({ error: "message" }, 400);

  try {
    const ipHash = await hashIp(clientIp(request));

    const recent = (await sql`
      select 1 from contact_messages
      where ip_hash = ${ipHash}
        and created_at > now() - (${RATE_LIMIT_MINUTES} || ' minutes')::interval
      limit 1
    `) as unknown[];
    if (recent.length) return json({ error: "rate" }, 429);

    await sql`
      insert into contact_messages (name, email, message, lang, ip_hash)
      values (${name}, ${email}, ${message}, ${lang}, ${ipHash})
    `;

    return json({ ok: true }, 201);
  } catch (error) {
    console.error("contact POST failed:", error);
    return json({ error: "generic" }, 500);
  }
};
