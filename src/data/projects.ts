import type { Lang } from "../i18n/utils";

export interface ProjectCopy {
  title: string;
  role: string;
  problem: string;
  solution: string[];
  outcome: string;
  summary: string;
}

export interface Project {
  slug: string;
  img: string;
  live: string;
  /** Klientske projekty majú súkromný repozitár — vtedy odkaz na kód chýba. */
  code?: string;
  concept: boolean;
  year: string;
  stack: string[];
  sk: ProjectCopy;
  en: ProjectCopy;
}

/** Prenesené 1:1 z CASE_STUDIES v pôvodnom index.html. */
export const projects: Project[] = [
  {
    slug: "pyro",
    img: "/assets/pyro.webp",
    live: "https://pyro-pizzeria.vercel.app",
    code: "https://github.com/DarkMaster9452/Pyro-pizzeria",
    concept: false,
    year: "2026",
    stack: ["Next.js", "TypeScript", "React", "E-commerce", "UI/UX"],
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
    slug: "osk",
    img: "/assets/osk.webp",
    live: "https://oskkp.sk",
    code: "https://github.com/DarkMaster9452/OSK-Kamenna-Poruba-Web",
    concept: false,
    year: "2026",
    stack: ["Full-stack", "Node.js", "Express", "Prisma", "PostgreSQL"],
    sk: {
      title: "OŠK Kamenná Poruba",
      role: "Full-stack vývoj",
      summary:
        "Web futbalového klubu na vlastnej doméne. Verejná stránka plus interné moduly pre trénerov, hráčov a rodičov — prihlásenie, oznamy, ankety, tréningy a integrácie na Sportnet a Instagram.",
      problem:
        "Futbalový klub potreboval vlastnú doménu — verejnú stránku aj interné nástroje pre trénerov, hráčov a rodičov.",
      solution: [
        "Verejná klubová stránka — novinky, tímy, zápasy",
        "Prihlásenie a interné moduly pre členov",
        "Oznamy, ankety a plán tréningov",
        "Integrácie na Sportnet a Instagram",
      ],
      outcome: "Nasadené a bežiace na vlastnej doméne oskkp.sk.",
    },
    en: {
      title: "OŠK Kamenná Poruba",
      role: "Full-stack build",
      summary:
        "A football club website on its own domain. A public club site plus internal modules for coaches, players and parents — login, announcements, polls, trainings and Sportnet & Instagram integrations.",
      problem:
        "A football club needed its own domain — a public site plus internal tools for coaches, players and parents.",
      solution: [
        "A public club site — news, teams, matches",
        "Login and internal modules for members",
        "Announcements, polls and a training schedule",
        "Sportnet and Instagram integrations",
      ],
      outcome: "Deployed and running on its own domain, oskkp.sk.",
    },
  },
  {
    slug: "dravio",
    // Zástupná grafika v brandingu Dravia — nie screenshot. Až budeš mať reálny
    // záber z dravio.sk, ulož ho ako public/assets/dravio.webp a prepíš tento riadok.
    img: "/assets/dravio-placeholder.svg",
    live: "https://dravio.sk",
    // Klientsky projekt — repozitár je súkromný, odkaz na kód zámerne chýba.
    concept: false,
    year: "2026",
    stack: ["Next.js", "Web dizajn", "SEO", "Vercel"],
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
    live: "https://vantra-six.vercel.app",
    code: "https://github.com/DarkMaster9452/Vantra",
    concept: true,
    year: "2026",
    stack: ["Next.js 16", "TypeScript", "Tailwind CSS", "Framer Motion", "Supabase"],
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
