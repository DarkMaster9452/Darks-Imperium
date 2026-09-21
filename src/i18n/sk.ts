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

  // ── pruh dostupnosti na doske ─────────────────────────────────────────
  availBadge: "Voľná kapacita",
  availTitle: "Prijímam nových klientov",
  availText:
    "Mám voľnú kapacitu na nové weby a systémy na mieru — ozvem sa do 24 hodín.",
  availCta: "Napíšte mi",
  availHow: "Ako to prebieha",

  // ── now ───────────────────────────────────────────────────────────────
  nowTitle: "Práve teraz",
  /* Krátko — dlaždica má na doske pevnú výšku. Meň spolu s dátumom v Now.astro. */
  nowText: "Staviam weby na mieru a vlastné projekty.",

  // ── dlaždice ──────────────────────────────────────────────────────────
  workTile: "Vybraná práca",
  cvTile: "Životopis",
  guestbookTile: "Návštevná kniha",
  accentTile: "Farba akcentu",
  accentPick: "Vybrať akcentovú farbu:",
  footerNote: "Ručne navrhnuté a postavené na Slovensku.",

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
  caseAudience: "Pre koho to je",
  caseOwner: "Vlastníctvo a dostupnosť",
  caseFeatures: "Čo to vie",
  caseBuild: "Ako je to postavené",
  caseScreens: "Obrazovky",
  caseOpen: "Celá case study",
  labelLive: "Live",
  labelConcept: "Koncept",
  labelProduct: "Vlastný produkt",
  featuredLabel: "Hlavný projekt",

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

  // ── now stránka ───────────────────────────────────────────────────────
  nowPageTitle: "Práve teraz",
  nowPageSub: "Čo mám rozrobené, čo beriem a ako sa mi ozvať. Stránka v štýle nownownow.com.",
  nowUpdated: "Aktualizované",
  nowWhatIs: "Čo je „now“ stránka?",

  nowWorkingH: "Na čom pracujem",
  nowWorkingP:
    "Staviam weby na mieru pre klientov — naposledy web pre DRAVIO s.r.o. Popri tom dolaďujem vlastné projekty a toto portfólio.",

  nowOpenH: "Prijímam projekty",
  nowOpenP:
    "Momentálne mám voľnú kapacitu na nové projekty. Píšte pokojne aj s nápadom, ktorý ešte nemá tvar — ozvem sa väčšinou do 24 hodín a poviem rovno, či to viem spraviť a približne za koľko.",
  nowOpenList:
    "Nový web pre firmu alebo živnosť|Redizajn stránky, ktorá už nestíha|Objednávkový alebo rezervačný systém|Klubový či spolkový web s internou časťou|Jednostránkový web na kampaň alebo produkt",

  nowIncludedH: "Čo je v cene",
  nowIncludedList:
    "Dizajn na mieru, nie šablóna|Rýchle načítanie a poriadok v kóde|Prístupnosť a responzívnosť na každom zariadení|Základné SEO a sociálne náhľady|Nasadenie na doménu a odovzdanie",

  nowProcessH: "Ako to prebieha",
  nowProcess1H: "Ozvete sa",
  nowProcess1P: "Napíšete mi, čo potrebujete. Stačí pár viet.",
  nowProcess2H: "Dohodneme rozsah",
  nowProcess2P: "Prejdeme si, čo web má vedieť, a poviem cenu aj termín. Nezáväzne.",
  nowProcess3H: "Dizajn a vývoj",
  nowProcess3P: "Ukazujem priebežne, aby ste vedeli, kam to ide, a mohli zasiahnuť.",
  nowProcess4H: "Nasadenie",
  nowProcess4P: "Spustím to na vašej doméne a ukážem, ako si obsah spravujete sami.",

  nowLearningH: "Čo sa práve učím",
  nowLearningP:
    "Astro a prechody medzi stránkami, animácie a mikrointerakcie, práca s Postgresom cez Neon.",

  nowCta: "Napíšte mi",
  nowCtaSub: "Alebo si najprv pozrite, čo som postavil.",
  nowCtaWork: "Pozrieť práce",

  // ── životopis a kontaktný formulár ────────────────────────────────────
  cvTitle: "Životopis",
  cvSub: "Kto som, s čím pracujem a čo som postavil. Napíšte mi rovno z tejto stránky.",
  cvProfile: "Profil",
  cvServices: "Čo robím",
  cvSkills: "Zručnosti",
  cvProjects: "Vybrané projekty",
  cvContactBlock: "Kontakt",
  cvPrint: "Stiahnuť ako PDF",
  cvPrintHint: "Otvorí tlač prehliadača — vyberte „Uložiť ako PDF“.",

  ctTitle: "Napíšte mi",
  ctSub: "Odpoviem väčšinou do 24 hodín.",
  ctName: "Meno",
  ctNamePh: "Vaše meno",
  ctEmail: "E-mail",
  ctEmailPh: "vas@email.sk",
  ctMessage: "Správa",
  ctMessagePh: "S čím vám môžem pomôcť?",
  ctSend: "Odoslať správu",
  ctSending: "Odosielam…",
  ctThanks: "Ďakujem, správa dorazila. Ozvem sa čo najskôr.",
  ctErrName: "Vyplňte meno.",
  ctErrEmail: "Zadajte platný e-mail.",
  ctErrMessage: "Napíšte správu.",
  ctErrRate: "Ešte chvíľu — jedna správa za 10 minút, prosím.",
  ctErrGeneric: "Správu sa nepodarilo odoslať. Skúste to znova alebo napíšte na e-mail.",
  ctOffline: "Formulár je momentálne nedostupný — napíšte mi prosím na e-mail.",

  // ── ovládanie (dock) ──────────────────────────────────────────────────
  dockTheme: "Zmeniť akcentovú farbu",
  dockSound: "Zapnúť/vypnúť zvuk",
} as const;

export type UIKey = keyof typeof sk;
