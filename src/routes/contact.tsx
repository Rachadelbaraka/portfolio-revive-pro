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
        content: "Email, GitHub, LinkedIn — réponse sous 24h en semaine.",
      },
    ],
  }),
  component: ContactPage,
});

const contacts = [
  {
    icon: "✉️",
    label: "Email",
    value: "rachad.elbaraka@example.com",
    href: "mailto:rachad.elbaraka@example.com",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "linkedin.com/in/rachad-elbaraka",
    href: "https://www.linkedin.com/in/rachad-elbaraka",
  },
  {
    icon: "🐙",
    label: "GitHub",
    value: "github.com/Rachadelbaraka",
    href: "https://github.com/Rachadelbaraka",
  },
  {
    icon: "📍",
    label: "Localisation",
    value: "France — Open au remote",
    href: "#",
  },
];

function ContactPage() {
  useReveal();
  return (
    <Section className="bg-surface-2/40">
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="reveal">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="font-display text-3xl font-extrabold sm:text-4xl">
            Discutons de votre projet
          </h1>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Disponible pour stages, alternance ou missions freelance.
            Réponse sous 24h en semaine.
          </p>

          <div className="mt-8 flex flex-col gap-3">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border bg-surface px-4 py-4 transition-colors hover:border-primary/40"
              >
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-primary text-base">
                  {c.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[0.7rem] uppercase tracking-[0.06em] text-muted-foreground">
                    {c.label}
                  </div>
                  <div className="truncate text-sm font-semibold">
                    {c.value}
                  </div>
                </div>
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
        window.location.href = `mailto:rachad.elbaraka@example.com?subject=${subject}&body=${body}`;
      }}
      className="reveal flex flex-col gap-4 rounded-2xl border bg-surface p-6 sm:p-8"
    >
      <div className="font-display text-lg font-bold">Envoyer un message</div>
      <Field label="Nom" name="name" type="text" required />
      <Field label="Email" name="email" type="email" required />
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium uppercase tracking-[0.06em] text-muted-foreground">
          Message
        </label>
        <textarea
          name="message"
          required
          rows={5}
          className="resize-none rounded-lg border bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary"
        />
      </div>
      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
      >
        Envoyer
      </button>
      <p className="text-xs text-muted-foreground">
        Le formulaire ouvre votre client mail avec le message pré-rempli.
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
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-medium uppercase tracking-[0.06em] text-muted-foreground">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="rounded-lg border bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary"
      />
    </div>
  );
}
