import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
  Link,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-extrabold text-gradient">
          404
        </h1>
        <h2 className="mt-4 font-display text-xl font-semibold">
          Page introuvable
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Cette page n'existe pas ou a été déplacée.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow transition-opacity hover:opacity-90"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Rachad Portfolio" },
      {
        name: "description",
        content:
          "Portfolio de Rachad EL BARAKA, étudiant BTS SIO SLAM. Projets full-stack, IA, systèmes distribués, et épreuve E5.",
      },
      { property: "og:title", content: "Rachad Portfolio" },
      {
        property: "og:description",
        content:
          "Développeur Full-Stack & Systèmes Distribués. Projets, compétences et épreuve E5.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Rachad Portfolio" },
      { name: "description", content: "Dynamic Portfolio Booster enhances a portfolio with dynamic features and expanded functionality." },
      { property: "og:description", content: "Dynamic Portfolio Booster enhances a portfolio with dynamic features and expanded functionality." },
      { name: "twitter:description", content: "Dynamic Portfolio Booster enhances a portfolio with dynamic features and expanded functionality." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/ce4c2284-c8cd-4397-8efd-3b3f40daf52d/id-preview-c827257a--172a696d-5dac-442f-9a2a-1a7572c008f4.lovable.app-1776442644045.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/ce4c2284-c8cd-4397-8efd-3b3f40daf52d/id-preview-c827257a--172a696d-5dac-442f-9a2a-1a7572c008f4.lovable.app-1776442644045.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="dark" style={{ colorScheme: "dark" }}>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Header />
      <main className="pt-15">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
