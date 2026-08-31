import type { sk } from "./sk";

/** Angličtina. Typ vynúti, aby tu bol každý kľúč zo sk.ts. */
export const en: Record<keyof typeof sk, string> = {
  siteTitle: "Martin Straňanek — frontend & full-stack developer",
  siteDesc:
    "I build websites that look expensive, load fast and don't break. Frontend and full-stack development from Slovakia.",
  back: "Back",
  langName: "English",
  langSwitchTo: "Prepnúť na slovenčinu",
  skipToContent: "Skip to content",

  heroEyebrow: "welcome",
  heroP1intro: "Hi, I'm",
  heroName: "Martin Straňanek",
  heroP1rest: "— a frontend & full-stack developer from Slovakia.",
  heroP2:
    "I combine design and engineering into products that look expensive, load fast and don't break.",
  heroP3:
    "I work from the first wireframe to the final deploy. Got a project in mind? Get in touch — I reply within 24 hours.",
  heroP4: "Beyond code I'm into design, animation and football.",
  heroCta: "Message me",
  heroGithub: "GitHub",
  heroEmail: "Email",
  avatarAlt: "Animated avatar of Martin Straňanek",

  stackTitle: "Stack & tools",
  stackLanguages: "Languages",
  stackFrontend: "Frontend",
  stackStyling: "Styling & motion",
  stackBackend: "Backend & APIs",
  stackDatabases: "Databases",
  stackTools: "Tooling & deployment",

  contactTitle: "Let's start working together!",
  contactDetails: "Contact details",
  contactLocation: "Slovakia",
  contactFindMe: "Find me on",

  clockHere: "In Slovakia",
  clockThere: "Where you are",
  clockSame: "same timezone",
  available: "Taking on projects",

  nowTitle: "Now",
  nowWhat: "what's this?",
  nowText: "Building custom websites and my own projects.",

  workTile: "Selected work",
  playgroundTile: "Playground",
  guestbookTile: "Guestbook",
  accentTile: "Accent colour",
  accentPick: "Pick an accent colour:",
  footerNote: "Designed and built in Slovakia.",

  workTitle: "Selected work",
  workIntro:
    "Real projects — client sites and my own concepts. Open one for the case study and a live demo; the code is there for the projects with a public repo.",
  workAll: "All repositories on GitHub",
  servicesTitle: "What I can do for you",
  svc1H: "Web design",
  svc1P:
    "From idea to finished layout. Typography, colour, rhythm and a system that holds together on every page.",
  svc2H: "Development",
  svc2P:
    "Clean, fast, maintainable code. A frontend that fits the design precisely, and a backend that powers it.",
  svc3H: "Animation & interaction",
  svc3P:
    "Motion with a purpose. Micro-interactions and transitions that bring a site to life without slowing it down.",

  caseProblem: "Problem",
  caseSolution: "What I built",
  caseStack: "Stack",
  caseOutcome: "Status",
  caseRole: "Role",
  caseYear: "Year",
  caseLive: "Live demo",
  caseCode: "Code",
  labelLive: "Live",
  labelConcept: "Concept",

  gbTitle: "Guestbook",
  gbSub: "Drop a note, say hi, or share your thoughts. I read every message.",
  gbLeave: "Leave a message",
  gbName: "Name",
  gbNamePh: "Your name",
  gbWebsite: "Website",
  gbWebsitePh: "https://…",
  gbMessage: "Message",
  gbMessagePh: "Say something nice…",
  gbSend: "Send",
  gbSending: "Sending…",
  gbThanks: "Thank you! Your note is in the book.",
  gbEmpty: "Nothing here yet. Be the first.",
  gbCount: "messages",
  gbPrev: "Prev",
  gbNext: "Next",
  gbErrName: "Please enter a name.",
  gbErrMessage: "Please write a message.",
  gbErrUrl: "The website must start with http:// or https://",
  gbErrRate: "Hold on — one message per 10 minutes, please.",
  gbErrGeneric: "Couldn't save your message. Try again in a moment.",
  gbOffline: "The guestbook is temporarily unavailable.",

  pgTitle: "Playground",
  pgSub: "Small canvas experiments. Move your mouse across the grid.",
  pgHint: "Move the mouse · click to change density",

  dockTheme: "Change accent colour",
  dockSound: "Toggle sound",
};
