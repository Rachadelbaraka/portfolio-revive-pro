import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/useReveal";
import { Section, Eyebrow } from "@/components/Section";

export const Route = createFileRoute("/competences")({
  head: () => ({
    meta: [
      { title: "Compétences — Rachad EL BARAKA" },
      {
        name: "description",
        content:
          "Stack technique : langages, frameworks, outils et soft skills.",
      },
      { property: "og:title", content: "Compétences — Rachad EL BARAKA" },
      {
        property: "og:description",
        content: "Technologies maîtrisées et soft skills BTS SIO SLAM.",
      },
    ],
  }),
  component: CompetencesPage,
});

const groups = [
  {
    title: "Langages",
    items: [
      ["JavaScript / TypeScript", 90],
      ["Go", 85],
      ["Python", 75],
      ["Rust", 70],
      ["PHP", 65],
      ["SQL", 80],
    ] as const,
  },
  {
    title: "Frameworks & Librairies",
    items: [
      ["Next.js / React", 90],
      ["Tailwind CSS", 88],
      ["Node.js / Express", 80],
      ["Framer Motion", 75],
    ] as const,
  },
  {
    title: "Outils & Infrastructure",
    items: [
      ["Git / GitHub", 92],
      ["Docker", 85],
      ["Firebase / Supabase", 80],
      ["PostgreSQL / MongoDB", 80],
      ["VS Code / Figma", 90],
    ] as const,
  },
];

const soft = [
  { title: "Travail en équipe", desc: "Méthodes Agile, code review" },
  { title: "Résolution de problèmes", desc: "Approche méthodique du debug" },
  { title: "Apprentissage rapide", desc: "Veille technologique active" },
  { title: "Rigueur", desc: "Documentation et tests propres" },
];

function CompetencesPage() {
  useReveal();
  return (
    <Section>
      <div className="reveal mb-10 border-b border-border pb-8">
        <Eyebrow>Stack technique</Eyebrow>
        <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Compétences
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Technologies maîtrisées et outils utilisés dans l'ensemble des
          projets BTS SIO.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {groups.map((g) => (
          <div
            key={g.title}
            className="reveal rounded-2xl border bg-surface p-7"
          >
            <div className="mb-6 border-b border-border pb-3">
              <span className="font-display text-lg font-semibold tracking-tight">
                {g.title}
              </span>
            </div>
            <div className="flex flex-col gap-5">
              {g.items.map(([name, pct], i) => (
                <div key={name} className="flex flex-col gap-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground/85">{name}</span>
                    <span className="text-xs font-medium text-muted-foreground">
                      {pct}%
                    </span>
                  </div>
                  <div className="h-1 overflow-hidden rounded-full bg-foreground/5">
                    <div
                      className="bar-fill h-full rounded-full bg-primary"
                      style={{
                        width: `${pct}%`,
                        animationDelay: `${i * 0.08}s`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14">
        <div className="reveal mb-6 border-b border-border pb-6">
          <Eyebrow>Savoir-être</Eyebrow>
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Soft skills
          </h2>
        </div>
        <div className="reveal grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {soft.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border bg-surface p-6"
            >
              <div className="font-display text-base font-semibold tracking-tight">
                {s.title}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                {s.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
