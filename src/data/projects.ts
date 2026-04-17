export type ProjectCategory =
  | "Full-stack"
  | "IA / Systèmes"
  | "Systèmes distribués"
  | "PWA / IA"
  | "Front-end"
  | "Veille";

export interface Project {
  slug: string;
  name: string;
  emoji: string;
  short: string;
  long: string;
  tech: string[];
  category: ProjectCategory;
  github: string;
  featured?: boolean;
  highlights: string[];
  competences: string[]; // B1.x
}

export const projects: Project[] = [
  {
    slug: "morefix",
    name: "MoreFix WebStore",
    emoji: "🛒",
    short:
      "Plateforme e-commerce pour produits reconditionnés. Lighthouse 96, auth Firebase, responsive complet.",
    long: "Boutique en ligne complète développée en Next.js 14 (App Router) et TypeScript, avec authentification Firebase, panier persistant, gestion d'inventaire et paiement. Performances optimisées (Lighthouse 96), SEO travaillé et déploiement continu sur Vercel.",
    tech: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS", "Vercel"],
    category: "Full-stack",
    github: "https://github.com/Rachadelbaraka/MoreFix_",
    featured: true,
    highlights: [
      "Lighthouse 96 sur mobile et desktop",
      "Authentification Firebase + règles de sécurité",
      "Panier persistant (localStorage + Firestore)",
      "CI/CD sur Vercel à chaque push",
    ],
    competences: ["B1.1", "B1.3", "B1.4", "B1.5"],
  },
  {
    slug: "habittrack",
    name: "HabitTrack",
    emoji: "✅",
    short:
      "Habit Tracker + Daily Journal full-stack avec auth JWT, mode hors-ligne, PWA installable et statistiques.",
    long: "HabitTrack est une application full-stack premium type SaaS combinant suivi d'habitudes et journal quotidien. Authentification JWT, habitudes journalières/hebdomadaires personnalisables (couleur, icône, rappels, réorganisation), journal avec autosave, vue calendrier, dashboard de statistiques (streaks, tendances), mode sombre/clair, fallback localStorage en cas d'indisponibilité de l'API ou MongoDB, PWA installable avec service worker, et export/import JSON.",
    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Zustand",
      "Framer Motion",
      "Recharts",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
    ],
    category: "Full-stack",
    github: "https://github.com/Rachadelbaraka/Trackrad",
    featured: true,
    highlights: [
      "Authentification JWT (register / login)",
      "Habitudes journalières & hebdomadaires (réorder, couleur, icône, rappels)",
      "Journal quotidien avec autosave",
      "Vue calendrier avec indicateurs de complétion",
      "Dashboard statistiques (streaks & tendances) avec Recharts",
      "Mode sombre / clair",
      "Fallback offline localStorage si API/MongoDB indisponible",
      "PWA installable avec service worker",
      "Export / import des données en JSON",
    ],
    competences: ["B1.1", "B1.3", "B1.4", "B1.5", "B1.6"],
  },
  {
    slug: "orderbook",
    name: "Go Distributed Orderbook",
    emoji: "⚡",
    short:
      "Système de trading distribué. Sharding, réplication, 100k tx/s, latence <10ms, failover automatique.",
    long: "Carnet d'ordres distribué haute performance. Sharding par symbole, réplication leader/follower, failover automatique. Implémentation Go pour le réseau et Rust pour le matching engine critique. Persistance PostgreSQL + WAL.",
    tech: ["Go", "Rust", "PostgreSQL", "Docker", "gRPC"],
    category: "Systèmes distribués",
    github: "https://github.com/Rachadelbaraka/go-distributed-orderbook",
    highlights: [
      "100 000 transactions/seconde en bench",
      "Latence p99 sous 10ms",
      "Failover leader automatique",
      "Tests de charge reproductibles",
    ],
    competences: ["B1.1", "B1.2", "B1.5"],
  },
  {
    slug: "mindful-journal",
    name: "Mindful Journal",
    emoji: "📱",
    short:
      "PWA offline-first de journaling avec assistance IA. 200+ utilisateurs actifs, sync Supabase.",
    long: "Application PWA installable, fonctionnant offline grâce à un Service Worker custom. Synchronisation cloud via Supabase, analyse émotionnelle des entrées via API IA, design centré utilisateur. 200+ utilisateurs actifs réguliers.",
    tech: ["TypeScript", "Supabase", "PWA", "Vercel", "Workbox"],
    category: "PWA / IA",
    github: "https://github.com/Rachadelbaraka/mindful-journal",
    highlights: [
      "Offline-first (Service Worker + IndexedDB)",
      "Sync delta avec Supabase Realtime",
      "Analyse de sentiment automatique",
      "200+ utilisateurs actifs",
    ],
    competences: ["B1.3", "B1.5", "B1.6"],
  },
  {
    slug: "blog-veille",
    name: "Blog Veille Tech",
    emoji: "📝",
    short:
      "Plateforme de veille IA / systèmes distribués / web moderne. 50+ articles, SEO travaillé.",
    long: "Blog de veille technologique sur l'IA, les systèmes distribués et le web moderne. 50+ articles publiés, SEO travaillé, déploiement GitHub Pages, RSS, sitemap.",
    tech: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    category: "Veille",
    github: "https://github.com/Rachadelbaraka/blog-veille-tech",
    highlights: [
      "50+ articles publiés",
      "SEO + sitemap + RSS",
      "Audience croissante",
    ],
    competences: ["B1.3", "B1.6"],
  },
];

export const allTechs = Array.from(
  new Set(projects.flatMap((p) => p.tech)),
).sort();

export const allCategories: ProjectCategory[] = [
  "Full-stack",
  "IA / Systèmes",
  "Systèmes distribués",
  "PWA / IA",
  "Front-end",
  "Veille",
];
