import { GraduationCap, HeartHandshake, Users } from "lucide-react";

const items = [
  {
    icon: GraduationCap,
    period: "2025",
    title: "Resume Reviewer",
    org: "Internship and Career Center, President University",
    desc: "Providing feedback on resumes to help students improve their job search materials.",
  },
  {
    icon: GraduationCap,
    period: "2025",
    title: "Programming Mentor",
    org: "4th grade Elementary School",
    desc: "Teaching kids the fundamentals of programming through Scratch as the Social Project.",
  },
  {
    icon: Users,
    period: "2024 - 2025",
    title: "Tech Community Member",
    org: "University clubs",
    desc: "Member of the Informatics Student Association in Research and Technology division.",
  },
  {
    icon: HeartHandshake,
    period: "2023",
    title: "Community Volunteer",
    org: "English Tutor",
    desc: "Taught English to 6th - 8th grade students across 4 weeks during my student exchange in Moscow",
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 lg:py-32 bg-secondary/40">
      <div className="container mx-auto">
        <div className="max-w-2xl reveal">
          <div className="font-mono text-xs uppercase tracking-widest text-accent mb-4">
            03 — The Field Log
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold tracking-tight">
            Experience<span className="text-accent">.</span>
          </h2>
        </div>

        <div className="mt-12 relative">
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-px bg-border md:-translate-x-1/2" />
          <div className="space-y-8">
            {items.map((it, i) => (
              <div
                key={it.title}
                className={`reveal relative grid md:grid-cols-2 gap-6 md:gap-12 items-start ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className={`pl-12 md:pl-0 ${i % 2 === 1 ? "md:text-left" : "md:text-right"}`}>
                  <div className="absolute left-0 md:left-1/2 top-2 -translate-x-0 md:-translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-soft">
                    <it.icon className="h-4 w-4" />
                  </div>
                  <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-1">
                    {it.period}
                  </div>
                  <h3 className="font-display text-xl font-semibold">{it.title}</h3>
                  <div className="text-sm text-accent">{it.org}</div>
                </div>
                <div className="pl-12 md:pl-0">
                  <div className="rounded-xl border border-border bg-card p-5 text-sm text-muted-foreground leading-relaxed hover:shadow-soft transition-smooth">
                    {it.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
