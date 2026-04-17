import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/useReveal";
import { Section, Eyebrow } from "@/components/Section";

export const Route = createFileRoute("/veille")({
  head: () => ({
    meta: [
      { title: "Veille technologique — Rachad EL BARAKA" },
      {
        name: "description",
        content:
          "Veille active : IA, systèmes distribués, sécurité, web moderne.",
      },
      {
        property: "og:title",
        content: "Veille technologique — Rachad EL BARAKA",
      },
      {
        property: "og:description",
        content: "Sujets suivis : IA, systèmes distribués, sécurité, web.",
      },
    ],
  }),
  component: VeillePage,
});

const themes = [
  {
    chip: "IA",
    title: "RAG & LLMs en production",
    desc: "Architecture des pipelines Retrieval-Augmented Generation, vector databases (Qdrant, Weaviate), prompt engineering structuré.",
  },
  {
    chip: "Systèmes",
    title: "Systèmes distribués",
    desc: "Consensus (Raft), event sourcing, CQRS, sharding, observabilité avec OpenTelemetry.",
  },
  {
    chip: "Web",
    title: "Frameworks modernes",
    desc: "React Server Components, Next.js App Router, edge runtime, streaming SSR.",
  },
  {
    chip: "Sécurité",
    title: "Sécurité applicative",
    desc: "OWASP Top 10, supply-chain (npm audit, Dependabot), JWT vs sessions, gestion fine des secrets.",
  },
  {
    chip: "DevOps",
    title: "Infra as code",
    desc: "Docker, GitHub Actions, déploiement Vercel/Cloudflare Workers, monitoring Prometheus.",
  },
  {
    chip: "Langages",
    title: "Go & Rust",
    desc: "Concurrence Go (goroutines, channels), ownership Rust, interop FFI pour les modules critiques.",
  },
];

const sources = [
  { name: "Hacker News", url: "https://news.ycombinator.com" },
  { name: "GitHub Trending", url: "https://github.com/trending" },
  { name: "Lobsters", url: "https://lobste.rs" },
  { name: "Mozilla Hacks", url: "https://hacks.mozilla.org" },
  { name: "Smashing Magazine", url: "https://www.smashingmagazine.com" },
  { name: "MDN Web Docs", url: "https://developer.mozilla.org" },
];

function VeillePage() {
  useReveal();
  return (
    <Section>
      <div className="reveal mb-10">
        <Eyebrow>Veille active</Eyebrow>
        <h1 className="font-display text-3xl font-extrabold sm:text-4xl">
          Veille technologique
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
          Mes sujets de veille réguliers, sources et outils utilisés pour
          rester à jour.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {themes.map((t) => (
          <div
            key={t.title}
            className="reveal rounded-2xl border bg-surface p-6 transition-colors hover:border-[color:var(--accent-2)]/40"
          >
            <span className="mb-3 inline-block rounded border border-[color:var(--accent-2)]/20 bg-[color:var(--accent-2)]/10 px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-[0.08em] text-[color:var(--accent-2)]">
              {t.chip}
            </span>
            <h3 className="font-display text-base font-bold">{t.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {t.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="reveal mt-10 rounded-2xl border bg-surface p-6">
        <h2 className="font-display text-lg font-bold">Sources principales</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Flux et sites consultés au quotidien.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {sources.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border bg-surface-2 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
            >
              {s.name} ↗
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
