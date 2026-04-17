import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { Section, Eyebrow } from "@/components/Section";
import { allCategories, allTechs, projects } from "@/data/projects";

export const Route = createFileRoute("/projets/")({
  head: () => ({
    meta: [
      { title: "Projets — Rachad EL BARAKA" },
      {
        name: "description",
        content:
          "Tous les projets techniques : full-stack, IA distribuée, PWA, systèmes haute performance.",
      },
      { property: "og:title", content: "Projets — Rachad EL BARAKA" },
      {
        property: "og:description",
        content:
          "Réalisations BTS SIO SLAM avec filtres par catégorie et techno.",
      },
    ],
  }),
  component: ProjetsPage,
});

function ProjetsPage() {
  useReveal();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("Toutes");
  const [tech, setTech] = useState<string>("Toutes");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      if (category !== "Toutes" && p.category !== category) return false;
      if (tech !== "Toutes" && !p.tech.includes(tech)) return false;
      if (!q) return true;
      return (
        p.name.toLowerCase().includes(q) ||
        p.short.toLowerCase().includes(q) ||
        p.tech.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [query, category, tech]);

  return (
    <Section>
      <div className="reveal mb-8">
        <Eyebrow>Réalisations</Eyebrow>
        <h1 className="font-display text-3xl font-extrabold sm:text-4xl">
          Projets techniques
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
          Filtre par catégorie ou techno, ou cherche directement. Clique sur un
          projet pour voir le détail.
        </p>
      </div>

      {/* Filters */}
      <div className="reveal mb-8 flex flex-col gap-4 rounded-2xl border bg-surface p-4 sm:p-5">
        <div className="relative">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher un projet, une techno..."
            className="w-full rounded-lg border bg-background px-4 py-2.5 pr-10 text-sm outline-none transition-colors focus:border-primary"
          />
          <svg
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
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

        <div className="flex flex-col gap-3 sm:flex-row">
          <Pills
            label="Catégorie"
            value={category}
            onChange={setCategory}
            options={["Toutes", ...allCategories]}
          />
        </div>
        <div>
          <Pills
            label="Techno"
            value={tech}
            onChange={setTech}
            options={["Toutes", ...allTechs]}
          />
        </div>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="rounded-2xl border bg-surface p-10 text-center text-sm text-muted-foreground">
          Aucun projet ne correspond à ces filtres.
        </div>
      ) : (
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <Link
              key={p.slug}
              to="/projets/$slug"
              params={{ slug: p.slug }}
              className="reveal group flex flex-col gap-3 rounded-2xl border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-card"
            >
              {p.featured && (
                <span className="w-fit rounded border border-accent/30 bg-gradient-to-br from-primary/20 to-accent/20 px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-[0.08em] text-[color:var(--accent-2)]">
                  ⭐ Projet principal
                </span>
              )}
              <div className="flex items-start justify-between gap-3">
                <div className="font-display text-base font-bold">
                  {p.name}
                </div>
                <span className="text-xl">{p.emoji}</span>
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
              <div className="mt-auto flex items-center justify-between pt-2">
                <span className="text-xs font-semibold text-primary group-hover:text-[color:var(--accent-2)]">
                  → Voir détails
                </span>
                <span className="rounded border bg-surface-2 px-2 py-0.5 text-[0.65rem] text-muted-foreground">
                  {p.category}
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </Section>
  );
}

function Pills({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="mr-1 text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground">
        {label}
      </span>
      {options.map((opt) => {
        const active = opt === value;
        return (
          <button
            type="button"
            key={opt}
            onClick={() => onChange(opt)}
            className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
              active
                ? "border-primary bg-primary/15 text-primary"
                : "border-border bg-surface-2 text-muted-foreground hover:bg-muted"
            }`}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}
