import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/useReveal";
import { Section, Eyebrow } from "@/components/Section";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Rachad EL BARAKA" },
      {
        name: "description",
        content:
          "Me contacter — disponible pour stages, alternance et missions freelance.",
      },
      { property: "og:title", content: "Contact — Rachad EL BARAKA" },
      {
        property: "og:description",
        content: "Email, GitHub — réponse sous 24h en semaine.",
      },
    ],
  }),
  component: ContactPage,
});

const contacts = [
  {
    label: "Email",
    value: "rachadelbaraka3@gmail.com",
    href: "mailto:rachadelbaraka3@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/Rachadelbaraka",
    href: "https://github.com/Rachadelbaraka",
  },
  {
    label: "Localisation",
    value: "France — Saint-Étienne",
    href: "#",
  },
];

function ContactPage() {
  useReveal();
  return (
    <Section className="bg-surface-2/40">
      <div className="grid gap-14 lg:grid-cols-2">
        <div className="reveal">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Discutons de votre projet
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Disponible pour stages, alternance ou missions freelance.
            Réponse sous 24 heures en semaine.
          </p>

          <div className="mt-9 flex flex-col gap-3">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 rounded-xl border bg-surface px-5 py-4 transition-colors hover:border-primary/40"
              >
                <div className="min-w-0 flex-1">
                  <div className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    {c.label}
                  </div>
                  <div className="mt-1 truncate font-display text-base font-medium tracking-tight">
                    {c.value}
                  </div>
                </div>
                <span className="text-muted-foreground">→</span>
              </a>
            ))}
          </div>
        </div>

        <ContactForm />
      </div>
    </Section>
  );
}

function ContactForm() {
  useReveal();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const subject = encodeURIComponent(
          `[Portfolio] Message de ${data.get("name") ?? ""}`,
        );
        const body = encodeURIComponent(
          `${data.get("message") ?? ""}\n\n— ${data.get("name") ?? ""} (${data.get("email") ?? ""})`,
        );
        window.location.href = `mailto:rachadelbaraka3@gmail.com?subject=${subject}&body=${body}`;
      }}
      className="reveal flex flex-col gap-5 rounded-2xl border bg-surface p-7 sm:p-9"
    >
      <div className="font-display text-xl font-semibold tracking-tight">
        Envoyer un message
      </div>
      <Field label="Nom" name="name" type="text" required />
      <Field label="Email" name="email" type="email" required />
      <div className="flex flex-col gap-2">
        <label className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
          Message
        </label>
        <textarea
          name="message"
          required
          rows={5}
          className="resize-none rounded-lg border bg-background px-3.5 py-3 text-sm outline-none transition-colors focus:border-primary"
        />
      </div>
      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-foreground px-5 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
      >
        Envoyer le message
      </button>
      <p className="text-xs text-muted-foreground">
        Le formulaire ouvrira votre client mail avec le message pré-rempli.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="rounded-lg border bg-background px-3.5 py-3 text-sm outline-none transition-colors focus:border-primary"
      />
    </div>
  );
}
