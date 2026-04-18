import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { Section, Eyebrow } from "@/components/Section";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/projets/")({
  head: () => ({
    meta: [
      { title: "Projets — Rachad EL BARAKA" },
      {
        name: "description",
        content:
          "Réalisations techniques : applications full-stack, systèmes distribués, PWA et veille technologique.",
      },
      { property: "og:title", content: "Projets — Rachad EL BARAKA" },
      {
        property: "og:description",
        content:
          "Réalisations BTS SIO SLAM. Recherche par nom de projet ou technologie.",
      },
    ],
  }),
  component: ProjetsPage,
});

function ProjetsPage() {
  useReveal();
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return projects;
    return projects.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.short.toLowerCase().includes(q) ||
        p.tech.some((t) => t.toLowerCase().includes(q)),
    );
  }, [query]);

  return (
    <Section>
      <div className="reveal mb-10 border-b border-border pb-8">
        <Eyebrow>Réalisations</Eyebrow>
        <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Projets
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Sélection de réalisations professionnelles et personnelles.
          Recherchez par nom ou par technologie.
        </p>
      </div>

      {/* Search */}
      <div className="reveal mb-10">
        <div className="relative max-w-xl">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher un projet ou une technologie…"
            className="w-full rounded-lg border bg-surface px-4 py-3 pr-11 text-sm outline-none transition-colors focus:border-primary"
          />
          <svg
            className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
        </div>
        <div className="mt-3 text-xs text-muted-foreground">
          {filtered.length} projet{filtered.length > 1 ? "s" : ""} affiché
          {filtered.length > 1 ? "s" : ""}
        </div>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="rounded-2xl border bg-surface p-12 text-center text-sm text-muted-foreground">
          Aucun projet ne correspond à cette recherche.
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <Link
              key={p.slug}
              to="/projets/$slug"
              params={{ slug: p.slug }}
              className="reveal group flex flex-col gap-4 rounded-2xl border bg-surface p-7 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-card"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="rounded border bg-surface-2 px-2 py-0.5 text-[0.65rem] font-medium uppercase tracking-[0.08em] text-muted-foreground">
                  {p.category}
                </span>
                {p.featured && (
                  <span className="rounded border border-primary/30 bg-primary/10 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.08em] text-primary">
                    Phare
                  </span>
                )}
              </div>
              <div className="font-display text-xl font-semibold tracking-tight">
                {p.name}
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {p.short}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded border bg-surface-2 px-2 py-0.5 text-[0.7rem] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-auto border-t pt-4 text-xs font-medium text-primary group-hover:text-foreground">
                Voir le détail →
              </div>
            </Link>
          ))}
        </div>
      )}
    </Section>
  );
}
