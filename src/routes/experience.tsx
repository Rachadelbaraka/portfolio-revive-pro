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
  title: string;
  company: string;
  period: string;
  type: "Stage" | "Projet";
  desc: string;
  achievements: string[];
};

const items: Item[] = [
  {
    title: "Technicien support / développeur",
    company: "TechPC — Stage BTS SIO",
    period: "Mai 2025 — Juin 2025",
    type: "Stage",
    desc: "Maintenance et support utilisateur, automatisation d'inventaire et déploiements logiciels.",
    achievements: [
      "Support utilisateur niveau 1 et 2",
      "Scripts d'inventaire automatisés (Python)",
      "Documentation technique des procédures",
    ],
  },
  {
    title: "Développeur Full-Stack",
    company: "MoreFix — Stage BTS SIO 2",
    period: "Janvier 2026 — Février 2026",
    type: "Stage",
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
      <div className="reveal mb-10 border-b border-border pb-8">
        <Eyebrow>Parcours</Eyebrow>
        <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Expérience
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Stages effectués et expériences professionnelles marquantes.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {items.map((it, i) => (
          <div
            key={i}
            className="reveal grid grid-cols-[20px_1fr] items-start gap-5 sm:grid-cols-[28px_1fr] sm:gap-7"
          >
            <div className="flex flex-col items-center pt-6">
              <div className="h-2.5 w-2.5 rounded-full bg-primary" />
              {i < items.length - 1 && (
                <div className="mt-2 min-h-10 w-px flex-1 bg-border" />
              )}
            </div>
            <article className="rounded-2xl border bg-surface p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="font-display text-lg font-semibold tracking-tight sm:text-xl">
                    {it.title}
                  </div>
                  <div className="mt-1 text-sm font-medium text-primary">
                    {it.company}
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className="text-xs font-medium text-muted-foreground">
                    {it.period}
                  </span>
                  <span className="rounded border border-border bg-surface-2 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                    {it.type}
                  </span>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {it.desc}
              </p>
              <ul className="mt-4 flex flex-col gap-2">
                {it.achievements.map((a) => (
                  <li
                    key={a}
                    className="flex gap-3 text-sm text-muted-foreground"
                  >
                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        ))}
      </div>

      {/* Recommandations */}
      <div className="mt-20">
        <div className="reveal mb-8 border-b border-border pb-8">
          <Eyebrow>Recommandations</Eyebrow>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Témoignages des maîtres de stage
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Avis recueillis à l'issue des périodes en entreprise.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {recommendations.map((r) => (
            <article
              key={r.author}
              className="reveal flex flex-col gap-4 rounded-2xl border bg-surface p-7 sm:p-8"
            >
              <div className="font-display text-5xl leading-none text-primary/40">
                &ldquo;
              </div>
              <div className="flex flex-col gap-3">
                {r.quotes.map((q, idx) => (
                  <p
                    key={idx}
                    className="text-sm italic leading-relaxed text-foreground/80"
                  >
                    {q}
                  </p>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3 border-t pt-5">
                <div className="grid h-11 w-11 place-items-center rounded-full border border-border bg-surface-2 font-display text-sm font-semibold text-foreground">
                  {r.author
                    .split(" ")
                    .map((p) => p[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <div>
                  <div className="font-display text-sm font-semibold tracking-tight">
                    {r.author}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {r.role}, {r.company}
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
