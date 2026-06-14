import { ArrowUpRight, Clapperboard, PenLine } from "lucide-react";

const videos = [
  {
    title: "Moscow Planetarium",
    role: "Video editing + captions",
    href: "https://drive.google.com/file/d/1T1tIbDpRZFt-pWAiws7P68n_W2CNKK7Q/view?usp=drive_link",
  },
  {
    title: "Kaluga City",
    role: "Video editing + captions",
    href: "https://drive.google.com/file/d/15eoDs0k0uvwfzPIpQGchvq2FGycbl0En/view?usp=drive_link",
  },
  {
    title: "Kaluga Museum of Cosmonautics",
    role: "Video editing + captions",
    href: "https://drive.google.com/file/d/17PcnfcJvg-ARFf13u_taQQwXJvdg0qcT/view?usp=drive_link",
  },
];

export const VideoEditing = () => {
  return (
    <section id="video-editing" className="py-24 lg:py-32 bg-secondary/40">
      <div className="container mx-auto">
        <div className="max-w-2xl reveal">
          <div className="font-mono text-xs uppercase tracking-widest text-accent mb-4">
            06 — Trying new things
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold tracking-tight">
            Video editing<span className="text-accent">.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Beyond code, I also do editing and caption short-form content.
            These are samples I edited for a friend's Instagram using CapCut.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {videos.map((v, i) => (
            <a
              key={v.title}
              href={v.href}
              target="_blank"
              rel="noreferrer"
              className="reveal group rounded-2xl border border-border bg-card p-6 hover:border-accent/40 hover:shadow-card transition-smooth"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary group-hover:bg-accent group-hover:text-accent-foreground transition-smooth">
                <Clapperboard className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold group-hover:text-accent transition-colors">
                {v.title}
              </h3>
              <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                <PenLine className="h-3.5 w-3.5" />
                <span>{v.role}</span>
              </div>
              <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground group-hover:text-accent transition-colors">
                Watch on Drive <ArrowUpRight className="h-4 w-4" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
