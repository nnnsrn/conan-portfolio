import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiFastapi,
  SiTensorflow,
  SiPytorch,
  SiGit,
  SiDocker,
  SiSupabase,
  SiPostgresql,
  SiFirebase,
  SiMongodb,
  SiRoboflow,
  SiOpenjdk,
} from "react-icons/si";

import { FaJava } from "react-icons/fa"; // if you prefer the Java logo

import {
  Globe,
  BrainCircuit,
  ScanSearch,
  MessageSquareText,
} from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Python", icon: SiPython },
      { name: "Java", icon: FaJava },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "SQL", icon: Globe },
    ],
  },

  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "FastAPI", icon: SiFastapi },
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "PyTorch", icon: SiPytorch },
    ],
  },

  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "Docker", icon: SiDocker },
      { name: "Supabase", icon: SiSupabase },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Firebase", icon: SiFirebase },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Roboflow", icon: SiRoboflow },
    ],
  },

  {
    title: "AI / Machine Learning",
    skills: [
      { name: "RAG", icon: BrainCircuit },
      { name: "Computer Vision", icon: ScanSearch },
      { name: "Natural Language Processing", icon: MessageSquareText },
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <p className="font-mono text-xs uppercase tracking-widest text-accent mb-4">
          01 — Skills
        </p>

        <h2 className="font-display text-4xl lg:text-5xl font-bold tracking-tight">
          Skills & Tech Stack<span className="text-accent">.</span>
        </h2>

        <div className="mt-8 space-y-3">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="reveal rounded-3xl border border-border bg-card p-6"
              style={{ transitionDelay: `${categoryIndex * 70}ms` }}
            >
              <h3 className="mb-5 font-display text-3xl font-semibold tracking-tight">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={skill.name}
                      className="group flex h-32 flex-col items-center justify-center rounded-2xl border border-border bg-background/30 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-soft"
                    >
                      <Icon className="mb-5 h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110" />

                      <span className="text-center text-base font-semibold">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};