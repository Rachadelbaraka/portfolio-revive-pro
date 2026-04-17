import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/useReveal";
import { Section, Eyebrow } from "@/components/Section";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Expérience — Rachad EL BARAKA" },
      {
        name: "description",
        content: "Stages, projets et expériences professionnelles BTS SIO SLAM.",
      },
      { property: "og:title", content: "Expérience — Rachad EL BARAKA" },
      {
        property: "og:description",
        content: "Stages, projets et expériences professionnelles BTS SIO SLAM.",
      },
    ],
  }),
  component: ExperiencePage,
});

type Item = {
  icon: string;
  title: string;
  company: string;
  period: string;
  type: "stage" | "projet";
  desc: string;
  achievements: string[];
};

const items: Item[] = [
  {
    icon: "🛠️",
    title: "Technicien support / développeur",
    company: "TechPC — Stage BTS SIO",
    period: "Mai 2025 — Juin 2025",
    type: "stage",
    desc: "Maintenance et support utilisateur, automatisation d'inventaire et déploiements logiciels.",
    achievements: [
      "Support utilisateur niveau 1 et 2",
      "Scripts d'inventaire automatisés (Python)",
      "Documentation technique des procédures",
    ],
  },
  {
    icon: "🚀",
    title: "Développeur Full-Stack — MoreFix",
    company: "Stage BTS SIO 2",
    period: "Janvier 2026 — Février 2026",
    type: "stage",
    desc: "Conception complète d'une boutique en ligne pour produits reconditionnés, du design à la production.",
    achievements: [
      "Architecture Next.js + Firebase",
      "Tunnel d'achat optimisé",
      "Déploiement Vercel + monitoring",
    ],
  },
];

type Recommendation = {
  author: string;
  role: string;
  company: string;
  quotes: string[];
};

const recommendations: Recommendation[] = [
  {
    author: "KHAMIS YASSER",
    role: "Directeur",
    company: "MoreFix",
    quotes: [
      "Le stagiaire fait preuve d'une grande autonomie, d'une rigueur technique remarquable et d'une forte capacité d'adaptation. Il démontre également une maturité professionnelle notable au regard de son niveau d'études.",
      "Au-delà du respect des règles, le stagiaire a adopté une posture professionnelle mature, démontrant sérieux, fiabilité et sens des responsabilités. Il a su inspirer confiance et s'imposer comme un membre à part entière de l'équipe.",
    ],
  },
  {
    author: "Abdelnacer MEKKI",
    role: "Directeur",
    company: "TechPC",
    quotes: [
      "Rachad EL BARAKA a réalisé un stage de grande qualité au sein de notre entreprise. Sérieux, autonome et impliqué, il a su s'intégrer rapidement et contribuer efficacement à nos projets, notamment sur le développement web et l'optimisation de notre plateforme. Ses compétences techniques, sa rigueur et sa capacité à proposer des solutions pertinentes ont été particulièrement appréciées. Nous recommandons vivement son profil.",
    ],
  },
];

function ExperiencePage() {
  useReveal();
  return (
    <Section>
      <div className="reveal mb-10">
        <Eyebrow>Parcours</Eyebrow>
        <h1 className="font-display text-3xl font-extrabold sm:text-4xl">
          Expérience
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
          Stages effectués et projets professionnels marquants.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {items.map((it, i) => (
          <div
            key={i}
            className="reveal grid grid-cols-[44px_1fr] items-start gap-4 sm:grid-cols-[80px_1fr] sm:gap-6"
          >
            <div className="flex flex-col items-center">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-primary text-base shadow-glow sm:h-11 sm:w-11">
                {it.icon}
              </div>
              {i < items.length - 1 && (
                <div className="mt-2 min-h-10 w-px flex-1 bg-border" />
              )}
            </div>
            <div className="rounded-2xl border bg-surface p-5 sm:p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="font-display text-base font-bold sm:text-lg">
                    {it.title}
                  </div>
                  <div className="mt-0.5 text-sm font-medium text-primary">
                    {it.company}
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className="text-xs text-muted-foreground">
                    {it.period}
                  </span>
                  <span
                    className={`rounded px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-[0.08em] ${
                      it.type === "stage"
                        ? "border border-primary/30 bg-primary/10 text-primary"
                        : "border border-accent/30 bg-accent/10 text-accent"
                    }`}
                  >
                    {it.type}
                  </span>
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {it.desc}
              </p>
              <ul className="mt-3 flex flex-col gap-1.5">
                {it.achievements.map((a) => (
                  <li
                    key={a}
                    className="flex gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-0.5 text-[color:var(--success)]">
                      ✓
                    </span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Recommandations */}
      <div className="mt-16">
        <div className="reveal mb-8">
          <Eyebrow>Recommandations</Eyebrow>
          <h2 className="font-display text-2xl font-extrabold sm:text-3xl">
            Avis de mes maîtres de stage
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
            Témoignages reçus à l'issue de mes périodes en entreprise.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {recommendations.map((r) => (
            <article
              key={r.author}
              className="reveal flex flex-col gap-4 rounded-2xl border bg-surface p-6 sm:p-7"
            >
              <div className="text-3xl leading-none text-primary">"</div>
              <div className="flex flex-col gap-3">
                {r.quotes.map((q, idx) => (
                  <p
                    key={idx}
                    className="text-sm italic leading-relaxed text-muted-foreground"
                  >
                    {q}
                  </p>
                ))}
              </div>
              <div className="mt-2 flex items-center gap-3 border-t pt-4">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-primary font-display text-sm font-bold text-primary-foreground">
                  {r.author
                    .split(" ")
                    .map((p) => p[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <div>
                  <div className="font-display text-sm font-bold">
                    {r.author}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {r.role} — {r.company}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
