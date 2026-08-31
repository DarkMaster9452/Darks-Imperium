# Portfólio — Martin Straňanek

Osobné portfólio ako **bento doska**: všetko podstatné na jednej obrazovke, detaily
na podstránkach. Astro + vanilla JS, nasadené na Verceli.

**Live:** https://strananekm.com

---

## Spustenie

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # produkčný build
npm run check    # typová kontrola (chýbajúci preklad = chyba)
```

Pre návštevnú knihu skopíruj `.env.example` do `.env` a doplň `DATABASE_URL`
a `GUESTBOOK_SALT`.

---

## Štruktúra

```
astro.config.mjs          Vercel adaptér, site = https://strananekm.com
src/
  styles/tokens.css       farby, rozmery, akcentové témy
  styles/base.css         reset, mriežka na pozadí, spoločné drobnosti
  i18n/{sk,en,utils}.ts   preklady a jazykové cesty
  data/projects.ts        projekty + case studies (sk aj en)
  data/stack.ts           toolbox rozdelený do skupín
  layouts/Base.astro      <head>, SEO, prechody, dock
  layouts/SubPage.astro   rám podstránok (Späť + nadpis)
  components/             Panel, Avatar, Dock, PixelWipe + dlaždice v tiles/
  pages/[...lang]/        doska a podstránky pre oba jazyky
  pages/api/guestbook.ts  GET + POST návštevnej knihy
public/                   screenshoty, favicon, og.png, sprites/
```

### Routy

| SK | EN | Čo to je |
|---|---|---|
| `/` | `/en` | bento doska |
| `/work` | `/en/work` | všetky projekty + služby |
| `/work/<slug>` | `/en/work/<slug>` | case study (`pyro`, `osk`, `dravio`, `vantra`) |
| `/guestbook` | `/en/guestbook` | návštevná kniha |
| `/playground` | `/en/playground` | canvas experiment |

---

## Dizajn

Tmavá doska (`--bg #0b0b0b`), karty `--panel #171717` s hairline rámikom, ktorý sa
pri hoveri prefarbí na akcent. V rohoch kariet sú malé ozuby — odkaz na skosenie
z pôvodného loga MS.

**Akcentová farba** je prepínateľná (dlaždica s piatimi krúžkami). Nastaví
`data-accent` na `<html>`, uloží voľbu do `localStorage` a inline skript v `<head>`
ju obnoví ešte pred prvým vykreslením, takže farba nepreblikne. Pridať ďalšiu =
jeden blok v `tokens.css` + jedna položka v `components/tiles/Accent.astro`.

Písma: **Space Grotesk** (displej + UI) a **JetBrains Mono** (mono popisky, hodiny),
self-hostované cez `@fontsource`, takže build nesiaha na Google Fonts.

---

## Jazyky

Slovenčina je na koreňových cestách, angličtina pod `/en`. Preklady sú v
`src/i18n/sk.ts` (zdroj pravdy) a `src/i18n/en.ts`.

`en.ts` je typovaný ako `Record<keyof typeof sk, string>` — **chýbajúci preklad
neprejde `npm run check` ani buildom.** Netreba na to žiadny skript.

Texty projektov a case studies sú dvojjazyčné priamo v `src/data/projects.ts`
(bloky `sk` a `en` pri každom projekte). `code` je voliteľné — klientske projekty
so súkromným repozitárom tlačidlo na kód jednoducho nemajú.

Náhľady projektov sú v `public/assets/`. **DRAVIO zatiaľ používa zástupnú
grafiku `dravio-placeholder.svg`** (branding firmy, nie screenshot) — keď budeš
mať reálny záber z dravio.sk, ulož ho ako `public/assets/dravio.webp` a prepíš
`img` v `projects.ts`.

---

## Návštevná kniha

Neon Postgres (projekt `strananek-portfolio`), jedna tabuľka:

```sql
create table guestbook (
  id bigserial primary key,
  name text not null check (char_length(name) between 1 and 40),
  website text check (char_length(website) <= 120),
  message text not null check (char_length(message) between 1 and 400),
  lang text not null default 'sk',
  ip_hash text not null,
  created_at timestamptz not null default now()
);
create index on guestbook (created_at desc);
```

Ochrany v `src/pages/api/guestbook.ts`:

- dĺžky kontroluje API aj `check` constraint v databáze,
- `website` musí byť platná `http(s)` adresa,
- skryté pole `company` (honeypot) — vyplnené znamená robota,
- jeden odkaz za 10 minút na `ip_hash`; **ukladá sa SHA-256 z IP a soli, nikdy
  samotná IP adresa**,
- odkazy sa vykresľujú cez `textContent`, nikdy `innerHTML`.

Bez `DATABASE_URL` sa API tvári ako nedostupné (503) a stránka to slušne oznámi —
build ani zvyšok webu to nepoloží.

---

## Avatar

V heroi je vyhradené miesto pre **rotujúci avatar**: sprite sheet 6×4 (24 snímok),
prehrávaný dvoma CSS animáciami — rýchlejšia prechádza stĺpce, pomalšia riadky.

Zapnutie:

1. nahraj `avatar-spin-<akcent>.webp` do `public/sprites/`
   (`crimson`, `amber`, `blue`, `violet`, `green`),
2. odkomentuj `--avatar-sheet` v príslušných blokoch v `src/styles/tokens.css`.

Kým súbory nie sú, `--avatar-sheet` je `none`, miesto ostane prázdne a nerobia sa
žiadne zbytočné requesty. Rozmery a časovanie sú v `src/components/Avatar.astro`.

---

## Nasadenie

Vercel projekt **`strananekm`** je napojený na tento repozitár, Astro si nájde sám.
V *Settings → Environment Variables* musia byť `DATABASE_URL` a `GUESTBOOK_SALT`.

Doména `strananekm.com` je nastavená ako `site` v `astro.config.mjs` — z nej sa
odvodzuje `canonical`, `og:url`, `og:image` aj `hreflang`.

---

## Prístupnosť a výkon

- Každá dlaždica je skutočný odkaz s viditeľným `:focus-visible` rámikom.
- `prefers-reduced-motion` vypína prechod medzi stránkami aj animáciu avatara.
- Zvuk je predvolene vypnutý; pípnutia generuje WebAudio, žiadne audio súbory.
- Žiadny JS framework — len Astro a niekoľko krátkych skriptov.

---

## Poznámka k inšpirácii

Layout a interakcie vychádzajú z [gianmarcocavallo.com](https://gianmarcocavallo.com)
([Ladvace/astro-bento-portfolio](https://github.com/Ladvace/astro-bento-portfolio), MIT).
Kód tu je písaný nanovo; obsah, texty a projekty sú vlastné.
