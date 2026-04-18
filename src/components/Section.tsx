import type { ReactNode } from "react";

export function Section({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`relative z-10 mx-auto w-full max-w-6xl px-6 py-20 ${className}`}
    >
      {children}
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-primary">
      <span className="h-px w-6 bg-primary" />
      {children}
    </div>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  sub,
  center,
}: {
  eyebrow?: string;
  title: ReactNode;
  sub?: ReactNode;
  center?: boolean;
}) {
  return (
    <div
      className={`reveal mb-9 ${center ? "text-center" : ""}`}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="font-display text-2xl font-extrabold leading-tight sm:text-3xl md:text-4xl">
        {title}
      </h2>
      {sub && (
        <p
          className={`mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base ${
            center ? "mx-auto" : ""
          }`}
        >
          {sub}
        </p>
      )}
    </div>
  );
}
