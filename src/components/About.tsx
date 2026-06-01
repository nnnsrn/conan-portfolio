import { Brain, Code2, Microscope, Sparkles } from "lucide-react";

const traits = [
  { icon: Brain, label: "Problem Solving", desc: "Enjoy analyzing challenges and turning ideas into practical solutions." },
  { icon: Microscope, label: "Research", desc: "Interested in exploring how technology can support scientific discovery." },
  { icon: Code2, label: "Development", desc: "Building web applications and software projects with modern technologies." },
  { icon: Sparkles, label: "Continuous Learning", desc: "Always exploring new tools, technologies, and areas of knowledge." },
];

export const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 reveal">
            <div className="font-mono text-xs uppercase tracking-widest text-accent mb-4">
              01 — Profile
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              About Me<span className="text-accent">.</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              I'm Nina, a Computer Science student with interests in
              artificial intelligence, data science, software development,
              and research. Through academic projects, technical coursework,
              and personal learning, I've developed experience in building
              applications, exploring data-driven solutions, and working with
              modern technologies.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Beyond coding, I enjoy learning about different cultures
              and collaborating on projects
              that create meaningful impact. My goal is to combine technical
              skills with research and innovation to solve real-world
              problems.
            </p>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {traits.map((t, i) => (
              <div
                key={t.label}
                className="reveal group rounded-2xl border border-border bg-card p-6 hover:border-accent/40 hover:shadow-card transition-smooth"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary group-hover:bg-accent group-hover:text-accent-foreground transition-smooth">
                  <t.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold">{t.label}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
