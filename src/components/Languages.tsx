import { Languages as LanguagesIcon } from "lucide-react";
import { languages } from "./ui/sonner";

export type Lang = {
  name: string;
  level: string;
  proficiency: number; // 0-100
  type: "Native" | "Foreign";
};

export const Languages = () => {
  return (
    <section id="languages" className="py-24 lg:py-32 relative">
      <div className="container mx-auto">
        <div className="max-w-2xl reveal">
          <div className="font-mono text-xs uppercase tracking-widest text-accent mb-4">
            04 — Polyglot Wannabe
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold tracking-tight">
            Languages spoken<span className="text-accent">.</span>
          </h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {languages.map((l, i) => (
            <div
              key={l.name}
              className="reveal rounded-2xl border border-border bg-card p-6 hover:shadow-card transition-smooth"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-md bg-secondary">
                    <LanguagesIcon className="h-4 w-4" />
                  </span>
                  <h3 className="font-display text-lg font-semibold">{l.name}</h3>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {l.type}
                </span>
              </div>
              <div className="text-sm text-muted-foreground mb-3">{l.level}</div>
              <div className="h-1.5 w-full rounded-full bg-secondary overflow-hidden">
                <div
                  className="h-full bg-gradient-accent"
                  style={{ width: `${l.proficiency}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
