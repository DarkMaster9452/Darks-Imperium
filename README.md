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
Náhľad + „Živá ukážka" + „Kód". Chceš vymeniť fotku? Prehoď súbor v `assets/`
(napr. `assets/pyro.webp`) alebo zmeň `src` v `<img>` daného projektu.

> **Vantra** má odkazy zatiaľ ako placeholder (`href="#"`, hľadaj `data-vantra-live`
> a `data-vantra-code` v `index.html`) — doplň live URL a repo.

## Čo si ešte uprav
- **Sociálne siete** — sekcia `#contact` (LinkedIn / Dribbble / X majú zatiaľ `#`).
- **Text o mne** — sekcia `#about` (nezabudni aj EN v objekte `EN`).
- **Toolbox** — sekcia `#stack`; tagy majú farebné logá a odkazujú na oficiálne stránky.

## Stack
Čisté HTML + CSS + trocha vanilla JS. Písma: Fraunces, Space Grotesk, JetBrains Mono.
Dvojjazyčnosť SK/EN, dark/light podľa systému, prístupnosť (a11y), `prefers-reduced-motion`
a hravé prvky (3D náklon kariet, konfety, ťahateľná nálepka).
