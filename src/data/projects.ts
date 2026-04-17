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
    slug: "rag-pipeline",
    name: "Enterprise RAG Pipeline",
    emoji: "🤖",
    short:
      "Pipeline RAG distribué traitant 10k+ documents/jour. Workers Go, embeddings Python, monitoring Prometheus.",
    long: "Pipeline Retrieval-Augmented Generation à l'échelle entreprise. Workers Go pour l'ingestion parallèle, services Python pour embeddings et indexation vectorielle, orchestration Docker Compose, monitoring Prometheus + Grafana, queue Redis.",
    tech: ["Go", "Python", "Docker", "Prometheus", "OpenAI API", "Redis"],
    category: "IA / Systèmes",
    github: "https://github.com/Rachadelbaraka/enterprise-rag-pipeline",
    featured: true,
    highlights: [
      "10k+ documents traités par jour",
      "Architecture worker / coordinator scalable",
      "Monitoring Prometheus + alerting",
      "Tests d'intégration end-to-end",
    ],
    competences: ["B1.1", "B1.2", "B1.4", "B1.5"],
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
    slug: "habittrack",
    name: "HabitTrack",
    emoji: "✅",
    short:
      "Suivi d'habitudes et journaling quotidien. React + TypeScript, hooks personnalisés, design soigné.",
    long: "Application React de suivi d'habitudes : streaks, statistiques hebdomadaires, journaling quotidien. Architecture en hooks personnalisés, persistance locale, animations fluides.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    category: "Front-end",
    github: "https://github.com/Rachadelbaraka/Trackrad",
    highlights: [
      "Hooks personnalisés réutilisables",
      "Persistance locale type-safe",
      "Statistiques hebdomadaires & streaks",
    ],
    competences: ["B1.3", "B1.6"],
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
