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
  code: string;
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
    slug: "fkrajec",
    img: "/assets/fkrajec.webp",
    live: "https://darkmaster9452.github.io/FK-Rajec-Web-Koncept/",
    code: "https://github.com/DarkMaster9452/FK-Rajec-Web-Koncept",
    concept: true,
    year: "2026",
    stack: ["Next.js 15", "shadcn/ui", "Tailwind v4", "Prisma", "Neon", "NextAuth"],
    sk: {
      title: "FK Rajec",
      role: "Dizajn + vývoj · koncept",
      summary:
        "Oficiálny web futbalového klubu — koncept. Next.js 15, shadcn/ui a Tailwind v4, s Prismou, Neon PostgreSQL a prihlásením cez NextAuth. Novinky, súpisky, zápasy a admin panel.",
      problem:
        "Ako by mohol vyzerať moderný oficiálny web futbalového klubu, postavený na dnešnom stacku?",
      solution: [
        "Klubové novinky, súpisky a rozpis zápasov",
        "Admin panel na správu obsahu",
        "Prihlásenie cez NextAuth",
        "Dáta cez Prisma + Neon PostgreSQL",
      ],
      outcome: "Funkčný koncept nasadený na GitHub Pages.",
    },
    en: {
      title: "FK Rajec",
      role: "Design + build · concept",
      summary:
        "The official football club website — a concept. Next.js 15, shadcn/ui and Tailwind v4, with Prisma, Neon PostgreSQL and NextAuth login. Club news, rosters, matches and an admin panel.",
      problem:
        "What could a modern official football-club website look like, built on today's stack?",
      solution: [
        "Club news, rosters and a match schedule",
        "An admin panel for managing content",
        "Login via NextAuth",
        "Data through Prisma + Neon PostgreSQL",
      ],
      outcome: "A working concept deployed on GitHub Pages.",
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
