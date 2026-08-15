# Portfólio — Martin Straňanek

Osobné portfólio. Jeden statický súbor `index.html`, žiadny build, žiadne závislosti.

**Live:** https://darkmaster9452.github.io/idk/

---

## Dizajn systém — OBSIDIAN × EMBER

Tmavý, technický, futuristický. Všetky farby sú vlastné (žiadne default `#000` / `#ff0000`)
a sú definované ako CSS premenné v `:root` na začiatku `<style>`.

### OBSIDIAN — čierna sústava
Čierne s jemným **fialovým podtónom**, aby pôsobili chladne a digitálne, nie „špinavo".

| Premenná | Hex | Použitie |
|---|---|---|
| `--void` | `#07060B` | pozadie stránky |
| `--ink-900` | `#0B0A11` | tmavé plochy, ticker |
| `--ink-800` | `#100E18` | karty projektov |
| `--ink-700` | `#16131F` | zvýraznené plochy |
| `--ink-600` | `#1D1929` | najvyššia vrstva |
| `--line` | `#241F33` | hairline rámiky |
| `--line-soft` | `#17131F` | mriežka na pozadí, jemné deliče |

### EMBER — vlastná červená
Šarlátovo-karmínová (odtieň ~352°), navrhnutá tak, aby na čiernej **žiarila** a nepôsobila
ako chybová hláška.

| Premenná | Hex | Použitie |
|---|---|---|
| `--red` | `#F01F3D` | hlavná akcentová |
| `--red-400` | `#FF4A63` | hover, zvýraznený text |
| `--red-300` | `#FF8496` | jemné detaily |
| `--red-600` | `#C20F2E` | gradienty |
| `--red-700` | `#7E0A20` | rámiky, hlboké tiene |

### Text
`--text #EDEAF5` (chladná biela, nie `#fff`) · `--text-2 #B3ADC4` · `--muted #7C7590`

**Chceš iný odtieň červenej?** Zmeň `--red`, `--red-400`, `--red-600`, `--red-700`
v `:root` — celý web sa prefarbí, vrátane žiary, gradientov a rámikov.

---

## Logo

Monogram **MS** — biele hranaté „M" a červené „S" so zrezanými zakončeniami, v skosenom
štíte (rezy vľavo hore a vpravo dole). Rovnaké skosenie sa opakuje na tlačidlách, kartách
a dialógoch — je to vizuálny podpis celej stránky.

Logo žije na **3 miestach** a pri zmene ho treba upraviť všade:

| Súbor | Kde |
|---|---|
| `index.html` | inline `<svg>` v `.brand .mark` (navigácia) |
| `favicon.svg` | ikona v záložke prehliadača |
| `og.svg` | zdroj sociálnej karty |

Cesty sú identické vo všetkých troch:
```
štít  M8 1H39V32L32 39H1V8Z
M     M5.5 28.5V12l6 8L17.5 12v16.5
S     M34.5 15 32 12.5H23.5L21 15v2.6l2.5 2.5h8.5l2.5 2.5v3L32 28.1h-8.5L21 25.6
```

---

## Sociálna karta (OG image)

`og.png` (1200×630) je to, čo sa reálne zobrazí pri zdieľaní odkazu — **PNG, nie SVG**,
pretože Facebook, X ani LinkedIn SVG náhľady nezobrazujú.

`og.svg` je editovateľný zdroj. Po jeho zmene treba PNG vyrenderovať nanovo, napr.:
```bash
# ľubovoľný nástroj, ktorý vie SVG → PNG v presnom rozmere 1200×630
rsvg-convert -w 1200 -h 630 og.svg -o og.png
```

---

## Jazyky (SK / EN)

Web je dvojjazyčný, prepínač je v navigácii vpravo hore, voľba sa ukladá do `localStorage`.

- **Slovenčina je priamo v HTML** (zdroj pravdy).
- **Angličtina je v objekte `EN = {…}`** v `<script>` na konci `index.html`.
- Každý preložiteľný prvok má `data-i18n="kľúč"`.

> **Keď meníš text, zmeň ho na oboch miestach** — v HTML aj v `EN`. Momentálne je
> pokrytých všetkých **69 kľúčov**.

Rýchla kontrola, či niektorý preklad nechýba:
```bash
python3 - <<'PY'
import re
s=open("index.html").read()
html=set(re.findall(r'data-i18n="([^"]+)"',s))
en=s[s.index("var EN = {"):]; en=en[:en.index("\n      };")]
en=re.sub(r'"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*`','""',en)
print("chýba v EN:", sorted(html-set(re.findall(r'([A-Za-z0-9_]+)\s*:',en))) or "nič")
PY
```

Okrem `EN` sú dvojjazyčné ešte:
- `WORDS` — rotujúce slovo v nadpise (písané po znakoch ako v termináli),
- `CASE_LABELS` a `CASE_STUDIES` — obsah case-study dialógov.

---

## Sekcie

`hero` (+ HUD status panel) · `ticker` · `about` · `work` · `services` · `stack` · `contact` · `footer`

### Projekty
Sekcia „Vybraná práca" — screenshoty sú v `assets/`. Každá karta má náhľad, tagy a tri
tlačidlá: **Detail** (case study), **Živá ukážka**, **Kód**. Náhľady sú v pokoji stlmené
(`filter: saturate(.62) brightness(.72)`) a pri hoveri nabehnú do plnej farby.

Výmena fotky = prehodiť súbor v `assets/` alebo zmeniť `src` v `<img>`.

### Case studies
**Detail →** otvorí natívny `<dialog>` so štruktúrou Problém → Čo som postavil → Stack →
Stav + odkazy. Obsah je v objekte `CASE_STUDIES` (kľúče `pyro`, `osk`, `fkrajec`,
`vantra`, každý s blokmi `sk` / `en`).

Nový projekt = pridať kartu s `data-case="…"` + záznam do `CASE_STUDIES`.

### HUD panel v hero
Technický status vpravo hore (dostupnosť, lokalita, zameranie, stack, odozva) s
prebiehajúcou skenovacou linkou. Texty majú `data-i18n`, takže sa prekladajú tiež.

---

## Vlastná doména — `strananekm.com`

Web je pripravený, chýba len prepnúť. Postup pre GitHub Pages:

1. **Súbor `CNAME`** v koreni repozitára s jediným riadkom:
   ```
   strananekm.com
   ```
   > Pridaj ho až keď máš doménu kúpenú a DNS nastavené — inak GitHub Pages presmeruje
   > na nefunkčnú adresu a web bude dovtedy nedostupný.

2. **DNS u registrátora:**
   | Typ | Názov | Hodnota |
   |---|---|---|
   | A | `@` | `185.199.108.153` |
   | A | `@` | `185.199.109.153` |
   | A | `@` | `185.199.110.153` |
   | A | `@` | `185.199.111.153` |
   | CNAME | `www` | `darkmaster9452.github.io` |

3. V **Settings → Pages** nastav Custom domain a zapni **Enforce HTTPS**.

4. **V `index.html` prepíš 4 adresy** (sú označené komentárom `═══ DOMÉNA ═══`):
   `<link rel="canonical">`, `og:url`, `og:image` a `"url"` v JSON-LD —
   všetky na `https://strananekm.com/`.

---

## Prístupnosť a výkon

- `:focus-visible` rámiky, natívny `<dialog>`, `aria-*` popisky, sémantické značky.
- `prefers-reduced-motion` vypína animácie, ticker aj efekt písania.
- Vlastný kurzor a magnetické tlačidlá len na zariadeniach s myšou (`pointer: fine`).
- Žiadny build, žiadny JS framework — len 2 fonty z Google Fonts.

## Ako to spustiť lokálne
```bash
python3 -m http.server 8000   # potom http://localhost:8000
```

## Stack
Čisté HTML + CSS + vanilla JS. Písma: **Space Grotesk** (displej + UI),
**JetBrains Mono** (technické popisky).
