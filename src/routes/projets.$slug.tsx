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
      <div className="rounded-2xl border bg-surface p-10 text-center">
        <h1 className="font-display text-2xl font-extrabold">
          Projet introuvable
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Ce projet n'existe pas ou a été supprimé.
        </p>
        <Link
          to="/projets"
          className="mt-5 inline-flex rounded-md bg-gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
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
        className="reveal mb-6 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        ← Tous les projets
      </Link>

      <div className="reveal flex items-start gap-4">
        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-primary text-2xl shadow-glow">
          {p.emoji}
        </div>
        <div>
          {p.featured && (
            <span className="mb-2 inline-block rounded border border-accent/30 bg-gradient-to-br from-primary/20 to-accent/20 px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-[0.08em] text-[color:var(--accent-2)]">
              ⭐ Projet principal
            </span>
          )}
          <h1 className="font-display text-3xl font-extrabold sm:text-4xl">
            {p.name}
          </h1>
          <span className="mt-2 inline-block rounded border bg-surface-2 px-2 py-0.5 text-xs text-muted-foreground">
            {p.category}
          </span>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_320px]">
        <div className="reveal space-y-6 rounded-2xl border bg-surface p-6 sm:p-8">
          <p className="text-base leading-relaxed text-muted-foreground">
            {p.long}
          </p>

          <div>
            <h2 className="mb-3 font-display text-lg font-bold">
              Points clés
            </h2>
            <ul className="space-y-2">
              {p.highlights.map((h) => (
                <li
                  key={h}
                  className="flex gap-3 text-sm text-muted-foreground"
                >
                  <span className="mt-0.5 text-[color:var(--success)]">✓</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-3 font-display text-lg font-bold">
              Compétences BTS SIO couvertes
            </h2>
            <div className="flex flex-wrap gap-2">
              {p.competences.map((c) => (
                <span
                  key={c}
                  className="rounded-md border border-primary/30 bg-primary/10 px-2.5 py-1 text-xs font-bold text-primary"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        <aside className="reveal space-y-5">
          <div className="rounded-2xl border bg-surface p-5">
            <div className="mb-3 font-display text-xs font-bold uppercase tracking-[0.1em] text-muted-foreground">
              Stack
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
            className="flex items-center justify-between rounded-2xl border bg-surface p-5 transition-colors hover:border-primary/40"
          >
            <div>
              <div className="font-display text-sm font-bold">Code source</div>
              <div className="mt-1 text-xs text-muted-foreground">
                Voir sur GitHub →
              </div>
            </div>
            <span className="text-2xl">⎘</span>
          </a>
        </aside>
      </div>
    </Section>
  );
}
