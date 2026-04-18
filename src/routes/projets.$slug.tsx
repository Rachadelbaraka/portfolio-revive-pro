import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useReveal } from "@/hooks/useReveal";
import { Section } from "@/components/Section";
import { projects, type Project } from "@/data/projects";

export const Route = createFileRoute("/projets/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    if (!p)
      return {
        meta: [{ title: "Projet — Rachad EL BARAKA" }],
      };
    return {
      meta: [
        { title: `${p.name} — Rachad EL BARAKA` },
        { name: "description", content: p.short },
        { property: "og:title", content: `${p.name} — Rachad EL BARAKA` },
        { property: "og:description", content: p.short },
      ],
    };
  },
  notFoundComponent: () => (
    <Section>
      <div className="rounded-2xl border bg-surface p-12 text-center">
        <h1 className="font-display text-3xl font-semibold tracking-tight">
          Projet introuvable
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Ce projet n'existe pas ou a été supprimé.
        </p>
        <Link
          to="/projets"
          className="mt-6 inline-flex rounded-md bg-foreground px-4 py-2 text-sm font-semibold text-background"
        >
          ← Retour aux projets
        </Link>
      </div>
    </Section>
  ),
  component: ProjectDetail,
});

function ProjectDetail() {
  useReveal();
  const { project: p } = Route.useLoaderData() as { project: Project };

  return (
    <Section>
      <Link
        to="/projets"
        className="reveal mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        ← Tous les projets
      </Link>

      <div className="reveal border-b border-border pb-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded border bg-surface-2 px-2 py-0.5 text-[0.65rem] font-medium uppercase tracking-[0.08em] text-muted-foreground">
            {p.category}
          </span>
          {p.featured && (
            <span className="rounded border border-primary/30 bg-primary/10 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.08em] text-primary">
              Projet phare
            </span>
          )}
        </div>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          {p.name}
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {p.short}
        </p>
      </div>

      <div className="mt-10 grid gap-7 lg:grid-cols-[1fr_320px]">
        <div className="reveal space-y-8 rounded-2xl border bg-surface p-7 sm:p-9">
          <div>
            <h2 className="mb-3 font-display text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              Présentation
            </h2>
            <p className="text-base leading-relaxed text-foreground/85">
              {p.long}
            </p>
          </div>

          <div>
            <h2 className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              Points clés
            </h2>
            <ul className="space-y-3">
              {p.highlights.map((h) => (
                <li
                  key={h}
                  className="flex gap-3 text-sm leading-relaxed text-foreground/85"
                >
                  <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              Compétences BTS SIO couvertes
            </h2>
            <div className="flex flex-wrap gap-2">
              {p.competences.map((c) => (
                <span
                  key={c}
                  className="rounded-md border border-primary/30 bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        <aside className="reveal space-y-5">
          <div className="rounded-2xl border bg-surface p-6">
            <div className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              Stack technique
            </div>
            <div className="flex flex-wrap gap-1.5">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded border bg-surface-2 px-2 py-1 text-xs text-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <a
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-2xl border bg-surface p-6 transition-colors hover:border-primary/40"
          >
            <div>
              <div className="font-display text-sm font-semibold tracking-tight">
                Code source
              </div>
              <div className="mt-1 text-xs text-muted-foreground">
                Voir sur GitHub
              </div>
            </div>
            <span className="text-muted-foreground">↗</span>
          </a>
        </aside>
      </div>
    </Section>
  );
}
