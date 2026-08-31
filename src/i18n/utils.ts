import { sk, type UIKey } from "./sk";
import { en } from "./en";

export const LANGS = ["sk", "en"] as const;
export type Lang = (typeof LANGS)[number];

export const DEFAULT_LANG: Lang = "sk";

const DICTS = { sk, en } as const;

export function isLang(value: unknown): value is Lang {
  return typeof value === "string" && (LANGS as readonly string[]).includes(value);
}

/** t("sk")("heroCta") — preklad jedného kľúča. */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return DICTS[lang][key];
  };
}

/**
 * Cesty sú bez prefixu pre slovenčinu (`/work`) a s `/en` pre angličtinu
 * (`/en/work`), takže slovenská verzia zostáva na koreňových URL.
 */
export function localizePath(path: string, lang: Lang): string {
  const clean = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return lang === DEFAULT_LANG ? clean || "/" : `/en${clean}`;
}

/** Rovnaká stránka v druhom jazyku — pre prepínač a hreflang. */
export function otherLang(lang: Lang): Lang {
  return lang === "sk" ? "en" : "sk";
}

/** Vytvorí getStaticPaths pre [...lang] routy: undefined pre sk, "en" pre en. */
export function langStaticPaths() {
  return LANGS.map((lang) => ({
    params: { lang: lang === DEFAULT_LANG ? undefined : lang },
    props: { lang },
  }));
}
