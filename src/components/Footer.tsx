export function Footer() {
  return (
    <footer className="mt-12 border-t">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-xs text-muted-foreground sm:flex-row">
        <div className="font-display tracking-tight">
          © {new Date().getFullYear()} Rachad EL BARAKA
        </div>
        <div className="text-center sm:text-right">
          BTS SIO SLAM · Portfolio professionnel — Épreuve E5
        </div>
      </div>
    </footer>
  );
}
