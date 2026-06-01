import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

const channels = [
  { icon: Mail, label: "Email", value: "nisrinaizza.na@gmail.com", href: "mailto:nisrinaizza.na@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", value: "/in/nisrina-izza", href: "https://linkedin.com/in/nisrina-izza" },
  { icon: Github, label: "GitHub", value: "@nnnsrn", href: "https://github.com/nnnsrn" },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero opacity-60 pointer-events-none" />
      <div className="container mx-auto relative">
        <div className="max-w-3xl mx-auto text-center reveal">
          <div className="font-mono text-xs uppercase tracking-widest text-accent mb-4">
            07 — Open a New Case
          </div>
          <h2 className="font-display text-4xl lg:text-6xl font-bold tracking-tight leading-tight">
            Got a mystery worth solving<span className="text-accent">?</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Collaborations, research, or just a friendly hi🐱 —
            my inbox is always open.
          </p>

          <a
            href="mailto:nisrinaizza.na@gmail.com"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-3.5 font-medium shadow-soft hover:shadow-accent hover:bg-accent transition-smooth"
          >
            Send a message <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-14 grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {channels.map((c, i) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="reveal group rounded-2xl border border-border bg-card p-6 hover:border-accent/40 hover:shadow-card transition-smooth"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary group-hover:bg-accent group-hover:text-accent-foreground transition-smooth">
                <c.icon className="h-4 w-4" />
              </div>
              <div className="mt-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {c.label}
              </div>
              <div className="mt-1 font-medium group-hover:text-accent transition-colors">
                {c.value}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
