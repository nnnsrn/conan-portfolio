import { ArrowRight, Mail, Search } from "lucide-react";
import { Bowtie } from "./Bowtie";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-hero overflow-hidden pt-20"
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />

      {/* Floating magnifier silhouette */}
      <div className="absolute -right-20 top-32 hidden lg:block opacity-[0.06] animate-spin-slow">
        <Search className="h-[500px] w-[500px]" strokeWidth={1} />
      </div>

      <div className="container mx-auto relative z-10 grid lg:grid-cols-12 gap-12 items-center py-16">
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-4 py-1.5 text-xs font-medium text-muted-foreground animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent animate-pulse-ring" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Case File · Open for opportunities
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Hi, I'm <span className="relative inline-block">
              <span className="text-accent font-serif">Nina</span>
              <Bowtie className="absolute -top-3 -right-8 h-5 w-7 animate-float" />
            </span>
           
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Computer Science student exploring AI, software development, and everything in between. 
            I like creating applications that are useful, reliable, and enjoyable to use.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 font-medium shadow-soft hover:shadow-accent hover:bg-accent transition-smooth"
            >
              View Cases
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 font-medium hover:border-accent hover:text-accent transition-smooth"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
          </div>

          <div className="flex items-center gap-8 pt-4 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div>
              <div className="font-display text-2xl text-foreground">10+</div>
              <div>Projects Solved</div>
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <div className="font-display text-2xl text-foreground">2+</div>
              <div>Years Coding</div>
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <div className="font-display text-2xl text-foreground">∞</div>
              <div>Curiosity</div>
            </div>
          </div>
        </div>

        {/* Case file card */}
        <div className="lg:col-span-5 animate-scale-in" style={{ animationDelay: "0.4s" }}>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-accent rounded-3xl blur-2xl opacity-20" />
            <div className="relative rounded-2xl border border-border bg-card shadow-card p-8 space-y-6">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Case File · #002
                </span>
                <Bowtie className="h-3 w-5" />
              </div>

              <div className="space-y-1">
                <div className="text-xs text-muted-foreground font-mono">SUBJECT</div>
                <div className="font-display text-2xl">Nina</div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-xs text-muted-foreground font-mono mb-1">ROLE</div>
                  <div>CS Student</div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground font-mono mb-1">FOCUS</div>
                  <div>AI / Software</div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground font-mono mb-1">STATUS</div>
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    Investigating
                  </div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground font-mono mb-1">LOCATION</div>
                  <div>Earth</div>
                </div>
              </div>

              <div className="border-t border-border pt-4">
                <div className="text-xs text-muted-foreground font-mono mb-2">EVIDENCE</div>
                <div className="flex flex-wrap gap-2">
                  {["Python", "React", "AI/ML"].map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-secondary px-2.5 py-1 text-xs font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="font-mono text-[10px] text-muted-foreground italic">
                Following the clues from problem to solution.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
