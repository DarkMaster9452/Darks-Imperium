import type { UIKey } from "../i18n/sk";

export interface Tool {
  name: string;
  href: string;
  /** Inline SVG, prenesené z pôvodného toolboxu. Vlastný obsah, nie vstup od používateľa. */
  logo: string;
}

export interface ToolGroup {
  labelKey: UIKey;
  tools: Tool[];
}

const ts = `<svg viewBox="0 0 24 24"><rect width="24" height="24" rx="3" fill="#3178C6"/><text x="12" y="16.5" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-size="10" font-weight="700" fill="#fff">TS</text></svg>`;
const js = `<svg viewBox="0 0 24 24"><rect width="24" height="24" rx="3" fill="#F7DF1E"/><text x="12" y="16.5" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-size="10" font-weight="700" fill="#111">JS</text></svg>`;
const html = `<svg viewBox="0 0 24 24"><path d="M4 3l1.5 17L12 22l6.5-2L20 3z" fill="#E34F26"/><path d="M12 5.4v14.4l5.2-1.6L18.4 5.4z" fill="#EF652A"/><text x="12" y="15" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-size="7.5" font-weight="700" fill="#fff">5</text></svg>`;
const css = `<svg viewBox="0 0 24 24"><path d="M4 3l1.5 17L12 22l6.5-2L20 3z" fill="#1572B6"/><path d="M12 5.4v14.4l5.2-1.6L18.4 5.4z" fill="#33A9DC"/><text x="12" y="15" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-size="7.5" font-weight="700" fill="#fff">3</text></svg>`;
const react = `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="1.9" fill="#61DAFB"/><g stroke="#61DAFB" stroke-width="1"><ellipse cx="12" cy="12" rx="10.5" ry="4.2"/><ellipse cx="12" cy="12" rx="10.5" ry="4.2" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10.5" ry="4.2" transform="rotate(120 12 12)"/></g></svg>`;
const next = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10" stroke-width="1.4"/><path d="M9 16V8l6 8V8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const astro = `<svg viewBox="0 0 24 24" fill="none"><path d="M9.4 3h5.2l4.9 17-7.5-3.6L4.5 20z" fill="currentColor" opacity=".85"/><path d="M9 16.2c0 2.1 1.4 3.4 3 3.4s3-1.3 3-3.4c0-1-.4-1.8-1-2.4.2 1.4-.6 2.2-1.6 2.2-1.3 0-2.2-.9-2.2-2.3-.8.6-1.2 1.5-1.2 2.5z" fill="#FF5D01"/></svg>`;
const shadcn = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M19 12l-7 7"/><path d="M18 4L4 18"/></svg>`;
const tailwind = `<svg viewBox="0 0 24 24"><path d="M12 6.5c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.75.17 1.28.71 1.87 1.3.96.97 2.08 2.1 4.63 2.1 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.75-.17-1.28-.71-1.87-1.3C15.67 7.63 14.55 6.5 12 6.5zM7 12.5c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.75.17 1.28.71 1.87 1.3.96.97 2.08 2.1 4.63 2.1 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.75-.17-1.28-.71-1.87-1.3C10.67 13.63 9.55 12.5 7 12.5z" fill="#38BDF8"/></svg>`;
const motion = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M3 12h5l2-5 4 10 2-5h5"/></svg>`;
const node = `<svg viewBox="0 0 24 24"><path d="M12 2.2l8.5 4.9v9.8L12 21.8 3.5 16.9V7.1z" fill="#539E43"/><text x="12" y="15.6" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-size="9" font-weight="700" fill="#fff">N</text></svg>`;
const express = `<svg viewBox="0 0 24 24" fill="none"><rect x="1" y="1" width="22" height="22" rx="4" stroke="currentColor" stroke-width="1.5"/><text x="12" y="16" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-size="9" font-weight="700" fill="currentColor">ex</text></svg>`;
const authjs = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M12 3l7 3v5c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6z"/><path d="M9.3 12l1.9 1.9 3.5-3.7" stroke-width="1.4" stroke-linecap="round"/></svg>`;
const prisma = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"><path d="M4.3 16.1 11 3.4c.4-.8 1.6-.7 1.9.1l6 14.4c.2.6-.2 1.3-.9 1.4l-12 1.7c-.9.1-1.5-.8-1.1-1.6z"/><path d="M12 4.5 9.5 19" stroke-width="1.1" opacity=".55"/></svg>`;
const neon = `<svg viewBox="0 0 24 24"><rect width="24" height="24" rx="5" fill="#00E599"/><path d="M8 16.5v-9h1.6l5 6.3V7.5H16v9h-1.6l-5-6.3v6.3z" fill="#07060B"/></svg>`;
const postgres = `<svg viewBox="0 0 24 24"><rect width="24" height="24" rx="5" fill="#336791"/><text x="12" y="16" text-anchor="middle" font-family="Georgia,serif" font-size="8.5" font-weight="700" fill="#fff">Pg</text></svg>`;
const vercel = `<svg viewBox="0 0 24 24"><path d="M12 3l9.5 16.5h-19z" fill="currentColor"/></svg>`;
const git = `<svg viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#F05032"/><g fill="none" stroke="#fff" stroke-width="1.5"><circle cx="8" cy="8.5" r="1.5" fill="#fff"/><circle cx="8" cy="16" r="1.5" fill="#fff"/><circle cx="16" cy="11" r="1.5" fill="#fff"/><path d="M8 10v4M8 12.5c0-2 1-3.5 3.4-3.5H14"/></g></svg>`;
const figma = `<svg viewBox="0 0 24 24"><circle cx="14" cy="12" r="3.2" fill="#1ABCFE"/><path d="M6.8 5.2A3.2 3.2 0 0 1 10 2h3.2v6.4H10a3.2 3.2 0 0 1-3.2-3.2z" fill="#F24E1E"/><path d="M6.8 12A3.2 3.2 0 0 1 10 8.8h3.2v6.4H10A3.2 3.2 0 0 1 6.8 12z" fill="#A259FF"/><path d="M6.8 18.8A3.2 3.2 0 0 1 10 15.6h3.2v3.2a3.2 3.2 0 1 1-6.4 0z" fill="#0ACF83"/></svg>`;

/** Toolbox z pôvodného webu, rozdelený do skupín ako v referencii. */
export const stackGroups: ToolGroup[] = [
  {
    labelKey: "stackLanguages",
    tools: [
      { name: "TypeScript", href: "https://www.typescriptlang.org", logo: ts },
      { name: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", logo: js },
      { name: "HTML", href: "https://developer.mozilla.org/en-US/docs/Web/HTML", logo: html },
      { name: "CSS", href: "https://developer.mozilla.org/en-US/docs/Web/CSS", logo: css },
    ],
  },
  {
    labelKey: "stackFrontend",
    tools: [
      { name: "React", href: "https://react.dev", logo: react },
      { name: "Next.js", href: "https://nextjs.org", logo: next },
      { name: "Astro", href: "https://astro.build", logo: astro },
    ],
  },
  {
    labelKey: "stackStyling",
    tools: [
      { name: "Tailwind CSS", href: "https://tailwindcss.com", logo: tailwind },
      { name: "shadcn/ui", href: "https://ui.shadcn.com", logo: shadcn },
      { name: "Framer Motion", href: "https://motion.dev", logo: motion },
    ],
  },
  {
    labelKey: "stackBackend",
    tools: [
      { name: "Node.js", href: "https://nodejs.org", logo: node },
      { name: "Express", href: "https://expressjs.com", logo: express },
      { name: "NextAuth.js", href: "https://authjs.dev", logo: authjs },
    ],
  },
  {
    labelKey: "stackDatabases",
    tools: [
      { name: "PostgreSQL", href: "https://www.postgresql.org", logo: postgres },
      { name: "Neon", href: "https://neon.tech", logo: neon },
      { name: "Prisma", href: "https://www.prisma.io", logo: prisma },
    ],
  },
  {
    labelKey: "stackTools",
    tools: [
      { name: "Git", href: "https://git-scm.com", logo: git },
      { name: "Vercel", href: "https://vercel.com", logo: vercel },
      { name: "Figma", href: "https://figma.com", logo: figma },
    ],
  },
];
