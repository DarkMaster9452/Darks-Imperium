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
  nowText: "Building custom websites and my own projects.",

  workTile: "Selected work",
  cvTile: "Résumé",
  guestbookTile: "Guestbook",
  accentTile: "Accent colour",
  accentPick: "Pick an accent colour:",
  footerNote: "Handcrafted in Slovakia.",

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

  nowPageTitle: "Now",
  nowPageSub: "What I'm working on, what I'm taking on, and how to reach me. A now page, in the nownownow.com sense.",
  nowUpdated: "Updated",
  nowWhatIs: "What is a \u201cnow\u201d page?",

  nowWorkingH: "What I'm working on",
  nowWorkingP:
    "Building custom websites for clients — most recently the site for DRAVIO s.r.o. Alongside that I keep polishing my own projects and this portfolio.",

  nowOpenH: "Taking on projects",
  nowOpenP:
    "I currently have capacity for new work. Feel free to write even if the idea is still vague — I usually reply within 24 hours and tell you straight away whether I can build it and roughly what it costs.",
  nowOpenList:
    "A new site for a company or sole trader|A redesign of a site that no longer keeps up|An ordering or booking system|A club or association site with a members' area|A one-page site for a campaign or product",

  nowIncludedH: "What's included",
  nowIncludedList:
    "A design made for you, not a template|Fast loading and code that stays tidy|Accessibility and a layout that works on every device|Basic SEO and social previews|Deployment to your domain and a handover",

  nowProcessH: "How it goes",
  nowProcess1H: "You get in touch",
  nowProcess1P: "Tell me what you need. A few sentences is enough.",
  nowProcess2H: "We agree the scope",
  nowProcess2P: "We go through what the site has to do, and I give you a price and a date. No obligation.",
  nowProcess3H: "Design and build",
  nowProcess3P: "I show progress as I go, so you can see where it's heading and steer it.",
  nowProcess4H: "Launch",
  nowProcess4P: "I put it live on your domain and show you how to manage the content yourself.",

  nowLearningH: "What I'm learning",
  nowLearningP:
    "Astro and view transitions, animation and micro-interactions, and working with Postgres through Neon.",

  nowCta: "Message me",
  nowCtaSub: "Or take a look at what I've built first.",
  nowCtaWork: "See the work",

  cvTitle: "Résumé",
  cvSub: "Who I am, what I work with and what I've built. Message me straight from this page.",
  cvProfile: "Profile",
  cvServices: "What I do",
  cvSkills: "Skills",
  cvProjects: "Selected projects",
  cvContactBlock: "Contact",
  cvPrint: "Download as PDF",
  cvPrintHint: "Opens the browser print dialog — pick \u201cSave as PDF\u201d.",

  ctTitle: "Message me",
  ctSub: "I usually reply within 24 hours.",
  ctName: "Name",
  ctNamePh: "Your name",
  ctEmail: "Email",
  ctEmailPh: "you@email.com",
  ctMessage: "Message",
  ctMessagePh: "What can I help you with?",
  ctSend: "Send message",
  ctSending: "Sending…",
  ctThanks: "Thanks, your message arrived. I'll get back to you shortly.",
  ctErrName: "Please enter a name.",
  ctErrEmail: "Please enter a valid email.",
  ctErrMessage: "Please write a message.",
  ctErrRate: "Hold on — one message per 10 minutes, please.",
  ctErrGeneric: "Couldn't send the message. Try again, or drop me an email.",
  ctOffline: "The form is temporarily unavailable — please email me instead.",

  dockTheme: "Change accent colour",
  dockSound: "Toggle sound",
};
