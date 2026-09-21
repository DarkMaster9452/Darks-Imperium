import type { Lang } from "../i18n/utils";

/** Dvojica nadpis + text — moduly programu aj poznámky k architektúre. */
export interface Note {
  h: string;
  p: string;
}

/** Číslo do pásu pod úvodným screenshotom. */
export interface Metric {
  v: string;
  l: string;
}

/** Obrazovka do galérie. Popisok je v oboch jazykoch, cesta jedna. */
export interface Shot {
  src: string;
  sk: string;
  en: string;
}

export interface ProjectLink {
  href: string;
  sk: string;
  en: string;
  /** Prvý odkaz sa vykreslí ako plné tlačidlo. */
  primary?: boolean;
}

export interface ProjectCopy {
  title: string;
  role: string;
  problem: string;
  /** Čo bolo treba dodať — v case study pod nadpisom „Čo som postavil". */
  solution: string[];
  outcome: string;
  summary: string;

  /* ── voliteľné, pre projekty s plným rozpisom ──────────────────────── */
  /** Jeden riadok nad nadpisom case study. */
  tagline?: string;
  /** Úvodné odstavce nad screenshotom. */
  context?: string[];
  /** Pre koho je projekt určený. */
  audience?: string;
  /** Ako je to s vlastníctvom a dostupnosťou. */
  ownership?: string;
  /** Moduly / čo to vie. */
  features?: Note[];
  /** Ako je to postavené. */
  build?: Note[];
  metrics?: Metric[];
}

export interface Project {
  slug: string;
  /** Úvodný náhľad. Screenshoty sú 16:10, ilustrácie majú vlastný pomer. */
  img: string;
  /** Náhľad nie je screenshot — nevykresľuje sa v ráme okna. */
  illustration?: boolean;
  /** Vlastný produkt · nasadené · koncept — riadi odznak na karte. */
  status: "product" | "live" | "concept";
  /** Hlavný projekt: na /work dostane kartu cez celú šírku. */
  featured?: boolean;
  year: string;
  stack: string[];
  links: ProjectLink[];
  gallery?: Shot[];
  sk: ProjectCopy;
  en: ProjectCopy;
}

export const projects: Project[] = [
  {
    slug: "gridservis",
    img: "/assets/gridservis/prehlad.webp",
    status: "product",
    featured: true,
    year: "2026",
    stack: ["Windows", "Stripe", "Neon Postgres", "Vercel Functions", "Vanilla JS", "Python"],
    links: [
      { href: "https://www.gridservis.app", sk: "Stránka programu", en: "Product site", primary: true },
      { href: "https://www.gridservis.app/stiahnut.html", sk: "Stiahnuť demo", en: "Download the demo" },
      { href: "https://www.gridservis.app/funkcie.html", sk: "Všetky funkcie", en: "All features" },
    ],
    gallery: [
      {
        src: "/assets/gridservis/zakazky.webp",
        sk: "Zoznam zákaziek s filtrami podľa stavu a vyhľadávaním podľa ŠPZ",
        en: "Job list with status filters and search by licence plate",
      },
      {
        src: "/assets/gridservis/zakazka-udaje.webp",
        sk: "Detail zákazky — vozidlo vrátane VIN, stavu km a termínu objednania",
        en: "Job detail — the vehicle with VIN, mileage and the booked date",
      },
      {
        src: "/assets/gridservis/zakazka-prace.webp",
        sk: "Práce a cena — úkony z cenníka a diely vydané priamo zo skladu",
        en: "Labour and price — tasks from the price list and parts issued from stock",
      },
      {
        src: "/assets/gridservis/zakaznici.webp",
        sk: "Kartotéka zákazníkov s autami, útratou a poslednou návštevou",
        en: "Customer cards with their cars, total spend and last visit",
      },
      {
        src: "/assets/gridservis/sklad.webp",
        sk: "Sklad dielov s nákupnou a predajnou cenou, maržou a miestom v regáli",
        en: "Parts stock with buy and sell price, margin and shelf location",
      },
      {
        src: "/assets/gridservis/cennik-prac.webp",
        sk: "Cenník prác — úkony v kategóriách s normohodinami",
        en: "Labour price list — tasks grouped into categories with standard hours",
      },
      {
        src: "/assets/gridservis/statistiky.webp",
        sk: "Štatistiky tržieb, stavov zákaziek a najčastejších značiek vozidiel",
        en: "Stats on revenue, job states and the most frequent car brands",
      },
      {
        src: "/assets/gridservis/nastavenia.webp",
        sk: "Nastavenia dielne — hodinová sadzba, IBAN, DPH a číslovanie dokladov",
        en: "Workshop settings — hourly rate, IBAN, VAT and document numbering",
      },
    ],
    sk: {
      title: "GridServis",
      tagline: "Vlastný produkt · program pre autoservisy",
      role: "Produkt, dizajn, vývoj a predaj",
      summary:
        "Program pre Windows, ktorý vedie celý autoservis — zákazky, zákazníkov, sklad dielov, cenník prác, doklady aj štatistiky. Popri programe som postavil aj web, predaj cez Stripe a vydávanie licencií.",
      context: [
        "GridServis je môj vlastný produkt. Nápad, dizajn, program, web aj predaj sú moje — od prvej obrazovky po faktúru, ktorú si dielňa vytlačí.",
        "Program beží na počítači priamo v dielni a dáta zostávajú na ňom, nie v cudzom cloude. Demo si stiahne ktokoľvek zadarmo, plnú verziu odomyká predplatné.",
      ],
      audience:
        "Hlavne pre malé a stredné autoservisy, ktoré dnes vedú zákazky v zošite, v Exceli alebo v hlave. Typicky dielňa s jedným až piatimi mechanikmi, ktorá chce poriadok v zákazkách a doklady bez ručného počítania — nie drahý cloudový systém stavaný pre siete servisov.",
      ownership:
        "Vlastník a jediný autor som ja. Program je verejne dostupný — každý si ho môže stiahnuť, vyskúšať a používať; zdrojový kód zverejnený nie je.",
      problem:
        "Menší servis vedie zákazky na papieri. Keď sa zákazník o pol roka vráti, nikto presne nevie, čo sa na aute robilo a za koľko. Na konci mesiaca sa tržby dopočítavajú ručne, sklad nesedí a faktúra sa píše odznova. Veľké servisné systémy sú drahé, viazané na cloud a plné funkcií, ktoré dielňa s dvoma mechanikmi nikdy nepoužije.",
      solution: [
        "Samotný program pre Windows — sedem obrazoviek, ktoré pokryjú bežný deň v dielni",
        "Tlač zákazkového listu, faktúry aj štítku na kľúče priamo zo zákazky",
        "Prezentačný web gridservis.app — funkcie, cenník, inštalácia, FAQ aj právne stránky",
        "Predaj cez Stripe: ročné aj mesačné predplatné, obnova aj zrušenie",
        "Vydávanie licenčných kódov, viazanie na počítač a presun licencie na iný stroj",
        "Sprístupnenie inštalačky až po objednávke a e-maily s licenčným kódom",
        "Demo zadarmo, aby si program mohol vyskúšať ktokoľvek ešte pred platbou",
      ],
      features: [
        {
          h: "Zákazky",
          p: "Zoznam s filtrami podľa stavu — prijaté, v riešení, čaká na diely, hotové, vydané. Vyhľadávanie berie meno, značku, ŠPZ aj číslo zákazky, číslovanie beží samo v tvare Z2026-0001 a celý zoznam sa dá vyexportovať do CSV pre účtovníčku.",
        },
        {
          h: "Detail zákazky",
          p: "Štyri záložky: Údaje, Práce a cena, Fotky a História vozidla. Auto vrátane VIN, stavu km, motora, paliva a prevodovky, objednanie na termín s exportom do kalendára a štítky ako reklamácia či čaká na diel.",
        },
        {
          h: "Práce a cena",
          p: "Úkon sa pridá z cenníka aj s normohodinami a cena práce vyjde z hodinovej sadzby dielne. Diel sa vydá priamo zo skladu, takže stav sedí bez prepisovania. Dole je súčet za prácu, za diely a celková cena.",
        },
        {
          h: "Zákazníci",
          p: "Kartotéka s telefónom, autami, počtom zákaziek, celkovou útratou a dátumom poslednej návštevy. Pravidelných zákazníkov program označí sám a upozorní na otvorené a neuhradené zákazky.",
        },
        {
          h: "Sklad",
          p: "Diely s katalógovým číslom, množstvom, jednotkou a umiestnením v regáli. Nákupná cena, predajná cena a marža na kus, hodnota celého skladu a filter na dochádzajúce položky.",
        },
        {
          h: "Cenník prác",
          p: "Úkony v kategóriách ako brzdy, motor, podvozok, klimatizácia, pneumatiky či diagnostika, pri každom počet normohodín. Zmena hodinovej sadzby prepočíta celý cenník naraz.",
        },
        {
          h: "Štatistiky",
          p: "Tržby a počty zákaziek po mesiacoch, pomer peňazí za prácu a za diely, rozdelenie zákaziek podľa stavu, suma neuhradených, najčastejšie značky vozidiel a najhodnotnejší zákazníci.",
        },
        {
          h: "Doklady a nastavenia",
          p: "Zákazkový list a faktúra v PDF s rozpisom prác a dielov, štítok na kľúče. Názov dielne, adresa, hodinová sadzba, IBAN, splatnosť, DPH aj predpony čísel sa nastavia raz a tlačia sa do každého dokladu.",
        },
      ],
      build: [
        {
          h: "Web bez build kroku",
          p: "Stránky gridservis.app sú statické HTML, CSS a vanilla JS. Generuje ich jeden Python skript z jedného zdroja textov, takže cena v cenníku, v štruktúrovaných dátach pre Google aj v pätke nemôžu ísť od seba.",
        },
        {
          h: "Platba cez Stripe",
          p: "Objednávka je obyčajný formulár na serverovú funkciu, takže prejde aj bez JavaScriptu. Webhook je idempotentný — keď Stripe pošle tú istú udalosť dvakrát, druhá licencia nevznikne.",
        },
        {
          h: "Licencie viazané na počítač",
          p: "Po zaplatení server vygeneruje kód v tvare MECH-XXXX-XXXX-XXXX, uloží ho do Postgresu na Neone a pošle e-mailom. Licencia platí na jeden počítač; presun na iný stroj má vlastný tok, aby sa kód nedal donekonečna kopírovať.",
        },
        {
          h: "Oddelené práva v databáze",
          p: "Web číta databázu rolou, ktorá vidí len licencie, platby a návštevnosť. K dátam dielní sa nedostane, ani keby niekto získal premenné prostredia.",
        },
        {
          h: "Stiahnutie až po objednávke",
          p: "Inštalačku vydáva serverová funkcia po overení objednávky. Číslo verzie si web ťahá z posledného vydania na GitHube, takže sa nikde nepíše ručne a po vydaní sedí samo.",
        },
        {
          h: "Nič z cudzích domén",
          p: "Žiadne externé písma, analytika ani vložený obsah — web si nesie všetko vlastné a návštevnosť počíta vlastná funkcia. Menej prosenia o súhlas a rýchlejšie načítanie.",
        },
      ],
      metrics: [
        { v: "7", l: "obrazoviek programu" },
        { v: "0", l: "cudzích domén na webe" },
        { v: "1", l: "licencia na počítač" },
        { v: "199,99 €", l: "ročné predplatné" },
      ],
      outcome:
        "Hotový produkt v predaji na gridservis.app. Demo si stiahne ktokoľvek, plnú verziu odomkne ročné alebo mesačné predplatné. Program ďalej rozvíjam podľa toho, čo pýtajú servisy, ktoré ho používajú.",
    },
    en: {
      title: "GridServis",
      tagline: "My own product · software for car workshops",
      role: "Product, design, build and sales",
      summary:
        "A Windows program that runs a whole car workshop — jobs, customers, parts stock, labour pricing, documents and stats. Around the program I built the website, Stripe checkout and the licensing that issues the keys.",
      context: [
        "GridServis is my own product. The idea, the design, the program, the website and the sales are all mine — from the first screen to the invoice the workshop prints.",
        "It runs on a PC in the workshop and the data stays there, not in someone else's cloud. Anyone can download the demo for free; a subscription unlocks the full version.",
      ],
      audience:
        "Mainly for small and mid-sized car workshops that still track jobs in a notebook, in Excel or in their head. Typically a shop with one to five mechanics that wants order in its jobs and paperwork without hand-adding numbers — not an expensive cloud system built for dealer chains.",
      ownership:
        "I am the owner and the only author. The program is publicly available — anyone can download it, try it and use it; the source code is not published.",
      problem:
        "A small workshop keeps its jobs on paper. When the customer comes back half a year later, nobody knows exactly what was done to the car or for how much. At the end of the month revenue is added up by hand, stock doesn't match and every invoice is written from scratch. The big workshop systems are expensive, cloud-locked and full of features a two-mechanic shop will never touch.",
      solution: [
        "The Windows program itself — seven screens that cover a normal day in the workshop",
        "Job sheet, invoice and key tag printed straight from the job",
        "The gridservis.app website — features, pricing, install guide, FAQ and the legal pages",
        "Stripe checkout: yearly and monthly subscriptions, renewals and cancellation",
        "Licence keys, binding them to one computer and moving a licence to another machine",
        "The installer released only after a verified order, plus the emails carrying the key",
        "A free demo so anyone can try the program before paying anything",
      ],
      features: [
        {
          h: "Jobs",
          p: "A list filtered by state — received, in progress, waiting for parts, done, handed over. Search covers the name, the brand, the plate and the job number, numbering runs itself as Z2026-0001, and the whole list exports to CSV for the accountant.",
        },
        {
          h: "Job detail",
          p: "Four tabs: Details, Labour & price, Photos and Vehicle history. The car with its VIN, mileage, engine, fuel and gearbox, a booked date exported to the calendar, and tags such as warranty claim or waiting for a part.",
        },
        {
          h: "Labour & price",
          p: "A task comes from the price list with its standard hours, and the labour cost follows the workshop's hourly rate. Parts are issued straight from stock, so the count stays right without retyping. Totals for labour, parts and the whole job sit at the bottom.",
        },
        {
          h: "Customers",
          p: "Cards with the phone number, the cars, the job count, total spend and the last visit. Regulars are flagged automatically, and open or unpaid jobs are called out.",
        },
        {
          h: "Stock",
          p: "Parts with a catalogue number, quantity, unit and shelf location. Buy price, sell price and per-unit margin, the value of the whole stock, and a filter for items running low.",
        },
        {
          h: "Labour price list",
          p: "Tasks grouped into categories such as brakes, engine, suspension, air conditioning, tyres and diagnostics, each with its standard hours. Change the hourly rate and the entire price list recalculates.",
        },
        {
          h: "Stats",
          p: "Revenue and job counts by month, the split between labour and parts, jobs by state, the unpaid total, the most frequent car brands and the most valuable customers.",
        },
        {
          h: "Documents & settings",
          p: "Job sheet and invoice as PDFs with the labour and parts breakdown, plus a key tag. The workshop name, address, hourly rate, IBAN, payment terms, VAT and number prefixes are set once and printed on everything.",
        },
      ],
      build: [
        {
          h: "A site with no build step",
          p: "gridservis.app is static HTML, CSS and vanilla JS. One Python script generates it from a single source of copy, so the price on the pricing page, in the structured data for Google and in the footer can never drift apart.",
        },
        {
          h: "Stripe checkout",
          p: "An order is a plain form posting to a serverless function, so it works with JavaScript off. The webhook is idempotent — when Stripe replays the same event, a second licence is not issued.",
        },
        {
          h: "Licences bound to a machine",
          p: "After payment the server generates a MECH-XXXX-XXXX-XXXX key, stores it in Postgres on Neon and emails it out. A licence covers one computer; moving it to another machine has its own flow so a key can't just be copied around.",
        },
        {
          h: "Split database privileges",
          p: "The site reads the database through a role that only sees licences, payments and traffic. It cannot reach workshop data even if someone got hold of the environment variables.",
        },
        {
          h: "Download gated behind the order",
          p: "A serverless function releases the installer once the order checks out. The version number is pulled from the latest GitHub release, so it is never typed by hand and is correct the moment a release goes up.",
        },
        {
          h: "Nothing from third-party domains",
          p: "No external fonts, no analytics, no embeds — the site carries its own assets and counts traffic with its own function. Less consent nagging and a faster page.",
        },
      ],
      metrics: [
        { v: "7", l: "screens in the program" },
        { v: "0", l: "third-party domains" },
        { v: "1", l: "licence per computer" },
        { v: "€199.99", l: "a year" },
      ],
      outcome:
        "A finished product on sale at gridservis.app. Anyone can download the demo; a yearly or monthly subscription unlocks the full version. I keep developing it around what the workshops using it ask for.",
    },
  },
  {
    slug: "pyro",
    img: "/assets/pyro.webp",
    status: "live",
    year: "2026",
    stack: ["Next.js", "TypeScript", "React", "E-commerce", "UI/UX"],
    links: [
      { href: "https://pyro-pizzeria.vercel.app", sk: "Živá ukážka", en: "Live demo", primary: true },
      { href: "https://github.com/DarkMaster9452/Pyro-pizzeria", sk: "Kód na GitHube", en: "Code on GitHub" },
    ],
    sk: {
      title: "Pyro & Polomárik",
      role: "Dizajn + full-stack vývoj",
      summary:
        "Objednávková platforma pre dve pizzerie pod jednou značkou. Výber podniku, filtrovateľné menu, customizér pizze so živým prepočtom ceny, košík s kupónmi a kompletný checkout.",
      problem:
        "Dve prevádzky pod jednou značkou potrebovali jedno miesto, kde si zákazník vyberie podnik a objedná — bez telefonátov a papierových lístkov.",
      solution: [
        "Prepínač medzi dvoma reštauráciami, každá s vlastným menu",
        "Menu s kategóriami a filtrami",
        "Customizér pizze so živým prepočtom ceny",
        "Košík s kupónmi a zľavami",
        "Kompletný checkout — celý tok end-to-end v prehliadači",
      ],
      outcome:
        "Funkčná objednávková platforma nasadená na Verceli — od výberu podniku až po odoslanie objednávky.",
    },
    en: {
      title: "Pyro & Polomárik",
      role: "Design + full-stack build",
      summary:
        "A multi-restaurant pizza ordering platform for two venues under one roof. Restaurant picker, filterable menu, a pizza customizer with live pricing, a cart with coupons and a full checkout.",
      problem:
        "Two venues under one brand needed a single place for customers to pick a restaurant and order — no phone calls, no paper tickets.",
      solution: [
        "A switch between two restaurants, each with its own menu",
        "A menu with categories and filters",
        "A pizza customizer with live price calculation",
        "A cart with coupons and discounts",
        "A full checkout — the whole flow end-to-end in the browser",
      ],
      outcome:
        "A working ordering platform deployed on Vercel — from picking a venue to placing the order.",
    },
  },
  {
    slug: "dravio",
    // Zástupná grafika v brandingu Dravia — nie screenshot. Až budeš mať reálny
    // záber z dravio.sk, ulož ho ako public/assets/dravio.webp, prepíš tento
    // riadok a zmaž illustration.
    img: "/assets/dravio-placeholder.svg",
    illustration: true,
    status: "live",
    year: "2026",
    stack: ["Next.js", "Web dizajn", "SEO", "Vercel"],
    // Klientsky projekt — repozitár je súkromný, odkaz na kód zámerne chýba.
    links: [{ href: "https://dravio.sk", sk: "Živá stránka", en: "Live site", primary: true }],
    sk: {
      title: "DRAVIO s.r.o.",
      role: "Dizajn + vývoj · klientsky web",
      summary:
        "Web firmy na výkopové a demolačné práce v Rajeckej doline. Prehľad služieb, jasný postup objednávky, realizácie a kontakt s bezplatnou obhliadkou.",
      problem:
        "Firma robiaca výkopy, demolácie a zemné práce potrebovala web, cez ktorý ju zákazník v regióne nájde a hneď vie, čo ponúka a ako si ju objednať.",
      solution: [
        "Prehľad služieb — demolačné a búracie práce, výkopy a zemné práce, odvoz odpadov kontajnermi, nákladná doprava, kosenie a mulčovanie",
        "Postup spolupráce v štyroch krokoch: kontakt → obhliadka → realizácia → odovzdanie",
        "Sekcia realizácií a dôvodov, prečo si firmu vybrať",
        "Kontakt s telefónom a otváracími hodinami priamo v hlavičke aj v päte",
        "SEO cielené na región — Rajec, Rajecká dolina a okolie Žiliny",
      ],
      outcome: "Nasadené a bežiace na vlastnej doméne dravio.sk.",
    },
    en: {
      title: "DRAVIO s.r.o.",
      role: "Design + build · client work",
      summary:
        "A website for an excavation and demolition company in the Rajec valley. Services, a clear booking flow, past jobs and contact details with a free site visit.",
      problem:
        "A company doing excavation, demolition and earthworks needed a site that customers in the region could find, and that made the offer and the booking process obvious.",
      solution: [
        "Services overview — demolition, excavation and earthworks, container waste removal, haulage, mowing and mulching",
        "A four-step booking flow: contact → site visit → the work → handover",
        "A past-jobs section and the reasons to pick the company",
        "Phone number and opening hours in both the header and the footer",
        "Regional SEO — Rajec, the Rajec valley and the area around Žilina",
      ],
      outcome: "Deployed and running on its own domain, dravio.sk.",
    },
  },
  {
    slug: "vantra",
    img: "/assets/vantra.webp",
    status: "concept",
    year: "2026",
    stack: ["Next.js 16", "TypeScript", "Tailwind CSS", "Framer Motion", "Supabase"],
    links: [
      { href: "https://vantra-six.vercel.app", sk: "Živá ukážka", en: "Live demo", primary: true },
      { href: "https://github.com/DarkMaster9452/Vantra", sk: "Kód na GitHube", en: "Code on GitHub" },
    ],
    sk: {
      title: "Vantra",
      role: "Dizajn + vývoj · koncept",
      summary:
        "Koncept streamovacej platformy — rozhranie pre filmy a seriály s cinematickým heroom, trending rebríčkami, hodnoteniami a prehliadaním podľa kategórií.",
      problem:
        "Skúmanie rozhrania streamovacej platformy na úrovni veľkých hráčov — ako spraviť plynulý zážitok z prehliadania filmov a seriálov.",
      solution: [
        "Cinematický hero a trending rebríčky",
        "Hodnotenia a prehliadanie podľa kategórií",
        "Metadáta z TMDB a AniList API",
        "Animácie cez Framer Motion, prihlásenie cez Supabase",
      ],
      outcome:
        "Edukačný koncept — vývoj je momentálne pozastavený, živé demo je dostupné.",
    },
    en: {
      title: "Vantra",
      role: "Design + build · concept",
      summary:
        "A streaming platform concept — a movie & TV interface with a cinematic hero, trending rails, ratings and category browsing.",
      problem:
        "Exploring a big-streaming-grade interface — how to make browsing movies and shows feel smooth.",
      solution: [
        "A cinematic hero and trending rails",
        "Ratings and category browsing",
        "Metadata from the TMDB and AniList APIs",
        "Animation via Framer Motion, login via Supabase",
      ],
      outcome:
        "An educational concept — development is currently on hold; the live demo is available.",
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function copy(project: Project, lang: Lang): ProjectCopy {
  return project[lang];
}
