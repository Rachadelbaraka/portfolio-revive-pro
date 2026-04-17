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
    company: "TechPC — Stage BTS SIO 2",
    period: "2025",
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
    company: "Projet entrepreneurial",
    period: "2024 — aujourd'hui",
    type: "projet",
    desc: "Conception complète d'une boutique en ligne pour produits reconditionnés, du design à la production.",
    achievements: [
      "Architecture Next.js + Firebase",
      "Tunnel d'achat optimisé",
      "Déploiement Vercel + monitoring",
    ],
  },
  {
    icon: "🤖",
    title: "Pipeline IA distribué",
    company: "Projet personnel — Open Source",
    period: "2024",
    type: "projet",
    desc: "Construction d'un pipeline RAG distribué traitant 10k+ documents/jour pour la recherche sémantique.",
    achievements: [
      "Workers Go, embeddings Python",
      "Monitoring Prometheus + Grafana",
      "Tests d'intégration end-to-end",
    ],
  },
  {
    icon: "💻",
    title: "Stage découverte technique",
    company: "BTS SIO 1 — Stage initiation",
    period: "2024",
    type: "stage",
    desc: "Découverte du métier, gestion de parc et premières contributions front-end en équipe.",
    achievements: [
      "Audit du parc informatique",
      "Refonte d'une page interne",
      "Veille technologique partagée",
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
    </Section>
  );
}
