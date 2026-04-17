import { createFileRoute, Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/useReveal";
import { Section, Eyebrow } from "@/components/Section";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rachad EL BARAKA — Développeur Full-Stack & Systèmes" },
      {
        name: "description",
        content:
          "Étudiant BTS SIO SLAM. Applications web performantes, pipelines IA et architectures distribuées.",
      },
      {
        property: "og:title",
        content: "Rachad EL BARAKA — Développeur Full-Stack & Systèmes",
      },
      {
        property: "og:description",
        content:
          "Portfolio BTS SIO SLAM : projets, compétences, expérience et épreuve E5.",
      },
    ],
  }),
  component: HomePage,
});

const heroTags = [
  "Next.js",
  "TypeScript",
  "Go",
  "Python",
  "Docker",
  "IA / RAG",
  "PostgreSQL",
];

const competencesQuick = [
  { code: "B1.1", name: "Patrimoine informatique" },
  { code: "B1.2", name: "Incidents & assistance" },
  { code: "B1.3", name: "Présence en ligne" },
  { code: "B1.4", name: "Mode projet" },
  { code: "B1.5", name: "Mise à disposition" },
  { code: "B1.6", name: "Développement pro" },
];

function HomePage() {
  useReveal();
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <>
      {/* HERO */}
      <Section className="!py-20 sm:!py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_380px]">
          <div>
            <div className="reveal mb-5 inline-flex items-center gap-2 rounded-full border border-[color:var(--accent-2)]/25 bg-[color:var(--accent-2)]/10 px-3.5 py-1.5 text-[0.72rem] font-medium uppercase tracking-[0.1em] text-[color:var(--accent-2)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent-2)] pulse-dot" />
              BTS SIO SLAM · Épreuve E5 · 2025
            </div>
            <h1 className="reveal font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl md:text-6xl">
              Développeur <span className="text-gradient">Full-Stack</span>
              <br />& Systèmes Distribués
            </h1>
            <p className="reveal mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
              Rachad EL BARAKA — Étudiant en BTS SIO option SLAM. Je conçois
              des applications web performantes, des pipelines IA et des
              architectures distribuées couvrant l'ensemble du référentiel E5.
            </p>
            <div className="reveal mt-8 flex flex-wrap gap-3">
              <Link
                to="/e5"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
              >
                📋 Voir l'épreuve E5
              </Link>
              <Link
                to="/projets"
                className="inline-flex items-center gap-2 rounded-lg border bg-surface px-5 py-3 text-sm font-medium transition-colors hover:bg-muted"
              >
                🚀 Mes projets
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg border bg-surface px-5 py-3 text-sm font-medium transition-colors hover:bg-muted"
              >
                Contact
              </Link>
            </div>
            <div className="reveal mt-10 flex flex-wrap gap-2">
              {heroTags.map((t) => (
                <span
                  key={t}
                  className="rounded-md border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Synthèse card */}
          <aside className="reveal hidden rounded-2xl border bg-surface/80 p-7 backdrop-blur-md lg:block">
            <div className="mb-5 font-display text-xs font-bold uppercase tracking-[0.1em] text-muted-foreground">
              Synthèse E5 — Bloc 1
            </div>
            <div className="flex flex-col gap-4">
              <Stat label="Projets E5" value="6" tone="primary" />
              <div className="h-px bg-border" />
              <Stat label="Compétences couvertes" value="6/6" tone="success" />
              <div className="h-px bg-border" />
              <Stat label="Stages réalisés" value="2" />
            </div>
            <div className="mt-5 grid grid-cols-2 gap-2">
              {competencesQuick.map((c) => (
                <div
                  key={c.code}
                  className="rounded-lg border bg-surface-2 px-3 py-2.5"
                >
                  <div className="font-display text-xs font-bold text-primary">
                    {c.code}
                  </div>
                  <div className="mt-0.5 text-[0.7rem] leading-tight text-muted-foreground">
                    {c.name}
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </Section>

      <div className="h-px bg-border" />

      {/* Projets phares */}
      <Section>
        <div className="reveal mb-9 flex flex-wrap items-end justify-between gap-4">
          <div>
            <Eyebrow>Sélection</Eyebrow>
            <h2 className="font-display text-2xl font-extrabold sm:text-3xl">
              Projets phares
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              Trois réalisations représentatives — voir tous les projets pour
              filtrer par techno.
            </p>
          </div>
          <Link
            to="/projets"
            className="text-sm font-semibold text-primary hover:text-[color:var(--accent-2)]"
          >
            → Tous les projets
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {featured.map((p) => (
            <Link
              key={p.slug}
              to="/projets/$slug"
              params={{ slug: p.slug }}
              className="reveal group flex flex-col gap-3.5 rounded-2xl border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-card"
            >
              <div className="text-2xl">{p.emoji}</div>
              <div className="font-display text-base font-bold">{p.name}</div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {p.short}
              </p>
              <div className="mt-auto flex flex-wrap gap-1.5">
                {p.tech.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="rounded border bg-surface-2 px-2 py-0.5 text-[0.7rem] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}

function Stat({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone?: "primary" | "success";
}) {
  const toneClass =
    tone === "primary"
      ? "text-primary"
      : tone === "success"
        ? "text-[color:var(--success)]"
        : "text-foreground";
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className={`font-display text-xl font-extrabold ${toneClass}`}>
        {value}
      </span>
    </div>
  );
}
