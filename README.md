# Portfolio — Martin Straňanek

Osobné portfólio. Jeden statický súbor `index.html`, žiadny build.

**Live:** https://darkmaster9452.github.io/idk/

## Ako to spustiť lokálne
Otvor `index.html` v prehliadači, alebo:
```bash
python3 -m http.server 8000   # potom http://localhost:8000
```

## Projekty
Sekcia „Vybraná práca" ťahá reálne projekty z GitHubu (Pyro & Polomárik, OŠK Kamenná
Poruba, FK Rajec, Maturita KB, Stavebné práce, Dark's Imperium). Náhľady sú GitHub
OpenGraph karty; ak by sa nenačítali, zobrazí sa fallback `assets/thumb-fallback.svg`.
Chceš pixel-presné fotky? Vlož vlastné PNG do `assets/` a zmeň `src` v `<img>` daného projektu.

## Čo si ešte uprav
- **Sociálne siete** — sekcia `#contact` (LinkedIn / Dribbble / X majú zatiaľ `#`).
- **Fotka / text o mne** — sekcia `#about`.
- **Toolbox** — sekcia `#stack`; tagy odkazujú na oficiálne stránky technológií.

## Stack
Čisté HTML + CSS + trocha vanilla JS. Písma: Fraunces, Space Grotesk, JetBrains Mono.
Dark/light téma, prístupnosť (a11y) a `prefers-reduced-motion` v základe.
