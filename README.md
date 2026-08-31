# Portfólio — Martin Straňanek

Osobné portfólio ako **bento doska**: všetko podstatné na jednej obrazovke, detaily
na podstránkach. Astro + vanilla JS, nasadené na Verceli.

**Live:** https://www.strananekm.com

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
astro.config.mjs          Vercel adaptér, site = https://www.strananekm.com
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
  lib/sound.ts            krátke tóny (hover, klik, akord, odoslanie)
  pages/api/guestbook.ts  GET + POST návštevnej knihy
  pages/api/contact.ts    POST kontaktného formulára
public/                   screenshoty, favicon, og.png, sprites/
```

### Routy

| SK | EN | Čo to je |
|---|---|---|
| `/` | `/en` | bento doska |
| `/work` | `/en/work` | všetky projekty + služby |
| `/work/<slug>` | `/en/work/<slug>` | case study (`pyro`, `osk`, `dravio`, `vantra`) |
| `/guestbook` | `/en/guestbook` | návštevná kniha |
| `/cv` | `/en/cv` | životopis + kontaktný formulár |
| `/now` | `/en/now` | now stránka — dostupnosť a čo práve robím |

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

Kontaktný formulár na `/cv` používa rovnaké ochrany a vlastnú tabuľku:

```sql
create table contact_messages (
  id bigserial primary key,
  name text not null check (char_length(name) between 1 and 60),
  email text not null check (char_length(email) between 3 and 120),
  message text not null check (char_length(message) between 1 and 2000),
  lang text not null default 'sk',
  ip_hash text not null,
  created_at timestamptz not null default now()
);
```

Správy z formulára si prečítaš v Neon konzole:
`select created_at, name, email, message from contact_messages order by created_at desc;`

Bez `DATABASE_URL` sa obe API tvária ako nedostupné (503) a stránka to slušne
oznámi — build ani zvyšok webu to nepoloží.

---

## Avatar

V heroi sa točí avatar zo sprite sheetu **6×4 (24 snímok po 414×390 px)**. Hrajú ho
dve CSS animácie naraz: rýchlejšia prechádza stĺpce v riadku, pomalšia posúva na
ďalší riadok.

Pozor na percentá: `background-position` v percentách sa počíta z *rozdielu*
veľkostí pozadia a prvku, nie zo šírky prvku. Preto animácia beží od `0 %` do
`100 %` s `steps(n, jump-none)` — nie na násobky `-100 %`.

Sheet pre každý akcent je v `public/sprites/avatar-spin-<akcent>.webp` a vyberá ho
premenná `--avatar-sheet` v `tokens.css`, takže postava má vždy farbu témy.

---

## Nasadenie

Vercel projekt **`strananekm`** je napojený na tento repozitár, Astro si nájde sám.
V *Settings → Environment Variables* musia byť `DATABASE_URL` a `GUESTBOOK_SALT`.

`site` v `astro.config.mjs` je **`https://www.strananekm.com`** — z neho sa
odvodzuje `canonical`, `og:url`, `og:image`, `hreflang` aj sitemap.

> Musí sedieť s doménou, ktorú Vercel označuje ako primárnu. Apex
> `strananekm.com` robí 308 presmerovanie na `www`, takže kanonický host je
> `www`. Keby `site` ukazovalo na apex, Google by pri každom načítaní sitemapy
> aj kanonickej adresy narazil na redirect. Ak niekedy prehodíš primárnu doménu
> vo Verceli na apex, zmeň aj `site`.

### Indexovanie

`@astrojs/sitemap` generuje pri builde `sitemap-index.xml` a `sitemap-0.xml` so
všetkými statickými stránkami (18 URL — obe jazykové verzie). Vďaka `i18n`
nastaveniu má každá URL `hreflang` odkaz na svoj náprotivok, takže Google
slovenskú a anglickú verziu spáruje a neberie ich ako duplicitu.

`public/robots.txt` na sitemap odkazuje a zakazuje `/api/`. Po nasadení stačí
sitemapu raz odovzdať v Google Search Console.

---

## Now stránka

`/now` je stránka v štýle [nownownow.com](https://nownownow.com/about): čo mám
rozrobené, čo sa učím a hlavne **že prijímam projekty** — čo beriem, čo je v cene
a ako spolupráca prebieha. Vedie na ňu dlaždica „Práve teraz" z dosky.

Texty sú v `src/i18n/` pod kľúčmi `now*`. Zoznamy (`nowOpenList`, `nowIncludedList`)
sú jeden reťazec s položkami oddelenými zvislicou `|`.

> Now stránka má cenu len vtedy, keď je čerstvá. Keď meníš `nowWorkingP` alebo
> `nowLearningP`, prepíš aj dátum `updated` v `src/pages/[...lang]/now.astro`
> a v `src/components/tiles/Now.astro`.

---

## Zvuk

`src/lib/sound.ts` skladá krátke tóny cez WebAudio — žiadne audio súbory:

| Tón | Kedy |
|---|---|
| `CARD_HOVER` | prejdenie myšou po karte |
| `CLICK` | klik na odkaz alebo tlačidlo |
| `CHIME` | prepnutie akcentovej farby, zapnutie zvuku |
| `SENT` | odoslaný odkaz alebo správa |

Zvuk je predvolene vypnutý, prepína sa v docku a stav si `play()` číta priamo
z `localStorage`. `SoundBinder.astro` napája hover a klik na celý dokument;
hover len na zariadeniach s myšou (`pointer: fine`).

---

## Prístupnosť a výkon

- Každá dlaždica je skutočný odkaz s viditeľným `:focus-visible` rámikom.
- `prefers-reduced-motion` vypína prechod medzi stránkami aj animáciu avatara.
- Zvuk je predvolene vypnutý; pípnutia generuje WebAudio, žiadne audio súbory.
- Žiadny JS framework — len Astro a niekoľko krátkych skriptov.

---

## Poznámka k inšpirácii

Layout, ladenie zvukov a sprite avatara vychádzajú z
[gianmarcocavallo.com](https://gianmarcocavallo.com)
([Ladvace/astro-bento-portfolio](https://github.com/Ladvace/astro-bento-portfolio), MIT).
Kód je písaný nanovo; obsah, texty a projekty sú vlastné.

> **Avatar:** `public/sprites/avatar-spin-*.webp` sú prevzaté z toho repozitára.
> Zobrazujú jeho autora, nie Martina — pri výmene za vlastný sprite stačí prepísať
> súbory rovnakých rozmerov (6×4, snímka 414×390 px).
