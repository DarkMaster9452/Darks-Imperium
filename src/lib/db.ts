import { neon } from "@neondatabase/serverless";

/**
 * Pripojenie na Neon. Vytvára sa lenivo, aby build bez DATABASE_URL nespadol —
 * bez premennej sa návštevná kniha len tvári ako nedostupná.
 */
let cached: ReturnType<typeof neon> | null = null;

export function getSql() {
  if (cached) return cached;
  const url = import.meta.env.DATABASE_URL ?? process.env.DATABASE_URL;
  if (!url) return null;
  cached = neon(url);
  return cached;
}

/**
 * SHA-256 z IP a soli — do databázy nikdy neukladáme samotnú IP adresu.
 * Slúži len na to, aby sa dalo obmedziť tempo prispievania.
 */
export async function hashIp(ip: string): Promise<string> {
  const salt = import.meta.env.GUESTBOOK_SALT ?? process.env.GUESTBOOK_SALT ?? "strananek-portfolio";
  const bytes = new TextEncoder().encode(`${salt}:${ip}`);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

/** Vercel posiela pôvodnú IP v x-forwarded-for; berieme prvú položku. */
export function clientIp(request: Request): string {
  const fwd = request.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0]!.trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}
