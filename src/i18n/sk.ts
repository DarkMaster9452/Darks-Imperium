/**
 * Slovenčina — zdroj pravdy.
 *
 * Kľúče pridané tu si TypeScript vypýta aj v en.ts (en.ts je typovaný ako
 * Record<keyof typeof sk, string>), takže chýbajúci preklad je chyba buildu,
 * nie niečo, čo treba hľadať grepom.
 */
export const sk = {
  // ── spoločné ──────────────────────────────────────────────────────────
  siteTitle: "Martin Straňanek — frontend & full-stack developer",
  siteDesc:
    "Staviam weby, ktoré vyzerajú draho, načítajú sa rýchlo a nerozbijú sa. Frontend a full-stack vývoj zo Slovenska.",
  back: "Späť",
  langName: "Slovensky",
  langSwitchTo: "Switch to English",
  skipToContent: "Preskočiť na obsah",

  // ── hero ──────────────────────────────────────────────────────────────
  heroEyebrow: "vitajte",
  heroP1intro: "Ahoj, volám sa",
  heroName: "Martin Straňanek",
  heroP1rest: "— frontend & full-stack developer zo Slovenska.",
  heroP2:
    "Spájam dizajn a inžinierstvo do produktov, ktoré vyzerajú draho, načítajú sa rýchlo a nerozbijú sa.",
  heroP3:
    "Robím od prvého wireframu po posledný deploy. Máte projekt v hlave? Ozvite sa — odpovedám do 24 hodín.",
  heroP4: "Okrem kódu ma baví dizajn, animácie a futbal.",
  heroCta: "Napíšte mi",
  heroGithub: "GitHub",
  heroEmail: "E-mail",
  avatarAlt: "Animovaný avatar Martina Straňaneka",

  // ── stack ─────────────────────────────────────────────────────────────
  stackTitle: "Stack & nástroje",
  stackLanguages: "Jazyky",
  stackFrontend: "Frontend",
  stackStyling: "Štýlovanie & pohyb",
  stackBackend: "Backend & API",
  stackDatabases: "Databázy",
  stackTools: "Nástroje & nasadenie",

  // ── kontakt ───────────────────────────────────────────────────────────
  contactTitle: "Poďme na tom robiť spolu!",
  contactDetails: "Kontakt",
  contactLocation: "Slovensko",
  contactFindMe: "Nájdete ma na",

  // ── hodiny / status ───────────────────────────────────────────────────
  clockHere: "Na Slovensku",
  clockThere: "U vás je",
  clockSame: "rovnaké pásmo",
  available: "Prijímam projekty",

  // ── now ───────────────────────────────────────────────────────────────
  nowTitle: "Práve teraz",
  nowWhat: "čo to je?",
  /* Krátko — dlaždica má na doske pevnú výšku. Meň spolu s dátumom v Now.astro. */
  nowText: "Staviam weby na mieru a vlastné projekty.",

  // ── dlaždice ──────────────────────────────────────────────────────────
  workTile: "Vybraná práca",
  playgroundTile: "Ihrisko",
  guestbookTile: "Návštevná kniha",
  accentTile: "Farba akcentu",
  accentPick: "Vybrať akcentovú farbu:",
  footerNote: "Navrhnuté a postavené na Slovensku.",

  // ── stránka projektov ─────────────────────────────────────────────────
  workTitle: "Vybraná práca",
  workIntro:
    "Reálne projekty — klientske weby aj vlastné koncepty. Kliknite na projekt a otvorí sa case study so živou ukážkou; kód je pri projektoch s verejným repozitárom.",
  workAll: "Všetky repozitáre na GitHube",
  servicesTitle: "Čo pre vás spravím",
  svc1H: "Web dizajn",
  svc1P:
    "Od nápadu po hotový layout. Typografia, farby, rytmus a systém, ktorý drží pohromade na každej stránke.",
  svc2H: "Vývoj",
  svc2P:
    "Čistý, rýchly a udržateľný kód. Frontend, ktorý presne sadne dizajnu, aj backend, ktorý ho poháňa.",
  svc3H: "Animácie & interakcie",
  svc3P:
    "Pohyb, ktorý má zmysel. Mikrointerakcie a prechody, čo web oživia bez toho, aby zdržiavali.",

  // ── case study ────────────────────────────────────────────────────────
  caseProblem: "Problém",
  caseSolution: "Čo som postavil",
  caseStack: "Stack",
  caseOutcome: "Stav",
  caseRole: "Rola",
  caseYear: "Rok",
  caseLive: "Živá ukážka",
  caseCode: "Kód",
  labelLive: "Live",
  labelConcept: "Koncept",

  // ── návštevná kniha ───────────────────────────────────────────────────
  gbTitle: "Návštevná kniha",
  gbSub: "Nechajte odkaz, pozdravte alebo napíšte, čo vám napadlo. Čítam všetko.",
  gbLeave: "Nechať odkaz",
  gbName: "Meno",
  gbNamePh: "Vaše meno",
  gbWebsite: "Web",
  gbWebsitePh: "https://…",
  gbMessage: "Správa",
  gbMessagePh: "Napíšte niečo pekné…",
  gbSend: "Odoslať",
  gbSending: "Odosielam…",
  gbThanks: "Ďakujem! Váš odkaz je v knihe.",
  gbEmpty: "Zatiaľ tu nič nie je. Buďte prvý.",
  gbCount: "odkazov",
  gbPrev: "Predošlé",
  gbNext: "Ďalšie",
  gbErrName: "Vyplňte meno.",
  gbErrMessage: "Napíšte správu.",
  gbErrUrl: "Web musí začínať na http:// alebo https://",
  gbErrRate: "Ešte chvíľu — jeden odkaz za 10 minút, prosím.",
  gbErrGeneric: "Odkaz sa nepodarilo uložiť. Skúste to o chvíľu.",
  gbOffline: "Návštevná kniha je momentálne nedostupná.",

  // ── ihrisko ───────────────────────────────────────────────────────────
  pgTitle: "Ihrisko",
  pgSub: "Malé experimenty s canvasom. Pohnite myšou po mriežke.",
  pgHint: "Pohnite myšou · kliknutím zmeníte hustotu",

  // ── ovládanie (dock) ──────────────────────────────────────────────────
  dockTheme: "Zmeniť akcentovú farbu",
  dockSound: "Zapnúť/vypnúť zvuk",
} as const;

export type UIKey = keyof typeof sk;
