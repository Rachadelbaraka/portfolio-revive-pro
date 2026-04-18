import { createFileRoute, Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/useReveal";
import { Section, Eyebrow } from "@/components/Section";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/e5")({
  head: () => ({
    meta: [
      { title: "Épreuve E5 — Rachad EL BARAKA" },
      {
        name: "description",
        content:
          "Synthèse pour l'épreuve E5 du BTS SIO SLAM : projets, compétences couvertes et accès aux livrables.",
      },
      { property: "og:title", content: "Épreuve E5 — Rachad EL BARAKA" },
      {
        property: "og:description",
        content:
          "Mapping complet des projets sur les compétences B1.1 à B1.6 du référentiel.",
      },
    ],
  }),
  component: E5Page,
});

const competences = [
  {
    code: "B1.1",
    title: "Gérer le patrimoine informatique",
    desc: "Installation, déploiement, mise à jour, documentation et optimisation des systèmes.",
    projects: ["MoreFix WebStore", "HabitTrack", "Go Distributed Orderbook"],
  },
  {
    code: "B1.2",
    title: "Répondre aux incidents et demandes d'assistance",
    desc: "Support technique, résolution d'incidents, monitoring et maintenance préventive.",
    projects: ["Go Distributed Orderbook", "Stage TechPC"],
  },
  {
    code: "B1.3",
    title: "Développer la présence en ligne",
    desc: "Création de sites web, optimisation SEO, accessibilité et présence digitale.",
    projects: ["MoreFix WebStore", "Mindful Journal", "Blog Veille Tech"],
  },
  {
    code: "B1.4",
    title: "Travailler en mode projet",
    desc: "Méthodologies Agile/Kanban, gestion des livrables, versionnement Git, collaboration.",
    projects: ["MoreFix WebStore", "HabitTrack", "Mindful Journal", "Go Distributed Orderbook"],
  },
  {
    code: "B1.5",
    title: "Mettre à disposition un service informatique",
    desc: "Déploiement en production, monitoring continu, sécurisation et haute disponibilité.",
    projects: ["MoreFix WebStore", "HabitTrack", "Mindful Journal", "Go Distributed Orderbook"],
  },
  {
    code: "B1.6",
    title: "Organiser son développement professionnel",
    desc: "Veille technologique régulière, formation continue, partage de connaissances.",
    projects: ["Mindful Journal", "Blog Veille Tech", "HabitTrack"],
  },
];

function E5Page() {
  useReveal();
  return (
    <Section className="bg-surface-2/40">
      <div className="reveal mx-auto max-w-3xl border-b border-border pb-10 text-center">
        <Eyebrow>Épreuve E5 — Bloc 1</Eyebrow>
        <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Synthèse pour l'épreuve E5
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          Le bloc 1 du référentiel BTS SIO SLAM est entièrement couvert par les
          projets et stages présentés ici. Chaque compétence est associée à des
          réalisations concrètes et documentées.
        </p>
      </div>

      <div className="reveal mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[
          { num: "5", label: "Projets E5" },
          { num: "6/6", label: "Compétences" },
          { num: "2", label: "Stages" },
          { num: "100%", label: "Open source" },
        ].map((k) => (
          <div
            key={k.label}
            className="rounded-2xl border bg-surface px-6 py-6 text-center"
          >
            <div className="font-display text-3xl font-semibold tracking-tight text-primary">
              {k.num}
            </div>
            <div className="mt-2 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              {k.label}
            </div>
          </div>
        ))}
      </div>

      {/* Mapping */}
      <div className="mt-16">
        <div className="reveal mb-8 border-b border-border pb-6">
          <Eyebrow>Mapping référentiel</Eyebrow>
          <h2 className="font-display text-3xl font-semibold tracking-tight">
            Compétences BTS SIO — Bloc 1
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {competences.map((c) => (
            <div
              key={c.code}
              className="reveal rounded-2xl border bg-surface p-7 transition-colors hover:border-primary/40"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="font-display text-2xl font-semibold tracking-tight text-primary">
                  {c.code}
                </span>
                <span className="rounded-full border border-[color:var(--success)]/30 bg-[color:var(--success)]/10 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[color:var(--success)]">
                  Couvert
                </span>
              </div>
              <h3 className="font-display text-base font-semibold tracking-tight">
                {c.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {c.desc}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {c.projects.map((p) => (
                  <span
                    key={p}
                    className="rounded border bg-surface-2 px-2 py-0.5 text-[0.7rem] text-muted-foreground"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Repos */}
      <div className="mt-16">
        <div className="reveal mb-8 border-b border-border pb-6">
          <Eyebrow>Dépôts</Eyebrow>
          <h2 className="font-display text-3xl font-semibold tracking-tight">
            Accès aux livrables
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Link
              key={p.slug}
              to="/projets/$slug"
              params={{ slug: p.slug }}
              className="reveal flex flex-col gap-3 rounded-2xl border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-primary/40"
            >
              <span className="w-fit rounded border bg-surface-2 px-2 py-0.5 text-[0.65rem] font-medium uppercase tracking-[0.08em] text-muted-foreground">
                {p.category}
              </span>
              <div className="font-display text-base font-semibold tracking-tight">
                {p.name}
              </div>
              <div className="text-xs text-muted-foreground">
                {p.tech.slice(0, 3).join(" · ")}
              </div>
              <div className="mt-auto pt-3 text-xs font-semibold text-primary">
                Voir le projet →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
}
