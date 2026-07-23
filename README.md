# Portfolio — Martin Straňanek

Osobné portfólio. Jeden statický súbor `index.html`, žiadny build.

**Live:** https://darkmaster9452.github.io/idk/

## Ako to spustiť lokálne
Otvor `index.html` v prehliadači, alebo:
```bash
python3 -m http.server 8000   # potom http://localhost:8000
```

## Jazyky
Web je dvojjazyčný (SK / EN) — prepínač je v navigácii vpravo hore. Voľba sa ukladá
(localStorage). Preklady sú v objekte `EN = {…}` v `<script>` na konci `index.html`;
každý preložiteľný prvok má atribút `data-i18n="kľúč"` a slovenčina je priamo v HTML.

## Projekty
Sekcia „Vybraná práca" — reálne screenshoty projektov v `assets/`:
Pyro & Polomárik, OŠK Kamenná Poruba, FK Rajec (koncept), Vantra (koncept).
Každá karta má náhľad + tri tlačidlá: **Detail** (case study), **Živá ukážka** a **Kód**.
Chceš vymeniť fotku? Prehoď súbor v `assets/` (napr. `assets/pyro.webp`) alebo zmeň
`src` v `<img>` daného projektu.

### Case studies (Detail)
Kliknutie na **Detail →** otvorí modálny dialóg (natívny `<dialog>`) so štruktúrou
Problém → Čo som spravil → Stack → Stav + odkazy. Obsah je dvojjazyčný v objekte
`CASE_STUDIES` v `<script>` na konci `index.html` — každý projekt má kľúč (`pyro`,
`osk`, `fkrajec`, `vantra`) a bloky `sk` / `en`. Nový projekt = pridať kartu s
`data-case="…"` a záznam do `CASE_STUDIES`.

## Čo si ešte uprav
- **Text o mne** — sekcia `#about` (nezabudni aj EN v objekte `EN`).
- **Toolbox** — sekcia `#stack`; tagy majú farebné logá a odkazujú na oficiálne stránky.
- **Kontakt** — sekcia `#contact` má len reálne fungujúce odkazy (GitHub + e-mail).
  Ak pribudne LinkedIn a pod., pridaj `<a>` do `.c-socials`.

## Stack
Čisté HTML + CSS + trocha vanilla JS. Písma: Fraunces, Space Grotesk, JetBrains Mono.
Dvojjazyčnosť SK/EN, dark/light (podľa systému + manuálny prepínač v navigácii, voľba sa
ukladá), case-study dialógy, prístupnosť (a11y — `:focus-visible`, natívny `<dialog>`),
`prefers-reduced-motion`, ukazovateľ scroll progresu a hravé prvky (3D náklon kariet,
konfety, ťahateľná nálepka).
