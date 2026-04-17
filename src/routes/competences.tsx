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
    icon: "💻",
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
    icon: "⚛️",
    title: "Frameworks & Librairies",
    items: [
      ["Next.js / React", 90],
      ["Tailwind CSS", 88],
      ["Node.js", 80],
      ["Framer Motion", 75],
    ] as const,
  },
  {
    icon: "🛠️",
    title: "Outils & Infrastructure",
    items: [
      ["Git / GitHub", 92],
      ["Docker", 85],
      ["Firebase / Supabase", 80],
      ["PostgreSQL", 80],
      ["VS Code / Figma", 90],
    ] as const,
  },
];

const soft = [
  { icon: "👥", title: "Travail en équipe", desc: "Méthodes Agile, code review" },
  { icon: "🧠", title: "Résolution de problèmes", desc: "Debug systématique" },
  { icon: "📚", title: "Apprentissage rapide", desc: "Veille active" },
  { icon: "🎯", title: "Rigueur", desc: "Documentation propre" },
];

function CompetencesPage() {
  useReveal();
  return (
    <Section>
      <div className="reveal mb-10">
        <Eyebrow>Stack technique</Eyebrow>
        <h1 className="font-display text-3xl font-extrabold sm:text-4xl">
          Compétences
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
          Technologies maîtrisées et outils utilisés dans l'ensemble de mes
          projets BTS SIO.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {groups.map((g) => (
          <div
            key={g.title}
            className="reveal rounded-2xl border bg-surface p-6"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="text-xl">{g.icon}</span>
              <span className="font-display text-base font-bold">
                {g.title}
              </span>
            </div>
            <div className="flex flex-col gap-4">
              {g.items.map(([name, pct], i) => (
                <div key={name} className="flex flex-col gap-1.5">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{name}</span>
                    <span className="font-semibold text-foreground/70">
                      {pct}%
                    </span>
                  </div>
                  <div className="h-1 overflow-hidden rounded-full bg-foreground/5">
                    <div
                      className="bar-fill h-full rounded-full bg-gradient-primary"
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

      <div className="reveal mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {soft.map((s) => (
          <div
            key={s.title}
            className="rounded-2xl border bg-surface p-5 text-center"
          >
            <div className="mb-2 text-2xl">{s.icon}</div>
            <div className="font-display text-sm font-bold">{s.title}</div>
            <div className="mt-1 text-xs text-muted-foreground">{s.desc}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
