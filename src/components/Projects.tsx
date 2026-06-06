import { FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projectCategories, projects } from "@/data/projects";

export const Projects = () => {
  return (
    <section id="projects" className="py-24 lg:py-32 relative">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 reveal">
          <div className="max-w-2xl">
            <div className="font-mono text-xs uppercase tracking-widest text-accent mb-4">
              02 — Cases
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold tracking-tight">
              Selected projects<span className="text-accent">.</span>
            </h2>
          </div>
          <div className="font-mono text-xs text-muted-foreground">
            {projects.length.toString().padStart(2, "0")} projects on file
          </div>
        </div>

        <Tabs defaultValue="All" className="mt-12">
          <TabsList className="flex h-auto flex-wrap justify-start gap-2 bg-transparent p-0">
            {projectCategories.map((category) => {
              const count = category === "All"
                ? projects.length
                : projects.filter((project) => project.category === category).length;

              return (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground shadow-none data-[state=active]:border-accent data-[state=active]:bg-foreground data-[state=active]:text-background"
                >
                  <span>{category}</span>
                  <span className="ml-2 font-mono text-[10px] uppercase tracking-widest opacity-70">
                    {count}
                  </span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {projectCategories.map((category) => {
            const visibleProjects =
              category === "All"
                ? projects
                : projects.filter((project) => project.category === category);

            return (
              <TabsContent key={category} value={category} className="mt-8">
                {category !== "All" && (
                  <div className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    Showing {visibleProjects.length.toString().padStart(2, "0")} projects in {category}
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-6">
                  {visibleProjects.map((p, i) => (
                    <Link
                      key={p.id}
                      to={`/projects/${p.id}`}
                      className="reveal group relative block rounded-2xl border border-border bg-card p-7 hover:border-accent/40 hover:shadow-card transition-smooth overflow-hidden"
                      style={{ transitionDelay: `${i * 80}ms` }}
                    >
                      <div className="absolute -top-2 -right-2 rotate-12 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="border-2 border-accent/60 text-accent rounded px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest">
                          {p.status}
                        </div>
                      </div>

                      <div className="mb-5 overflow-hidden rounded-xl border border-border/70 bg-secondary/30">
                        <img
                          src={p.image}
                          alt={`${p.title} preview`}
                          loading="lazy"
                          className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                          onError={(event) => {
                            event.currentTarget.onerror = null;
                            event.currentTarget.src = "/projects/placeholder.svg";
                          }}
                        />
                      </div>

                      <div className="flex items-center justify-between mb-5">
                        <span className="font-mono text-xs text-muted-foreground">
                          Project · #{p.id}
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                          {p.category}
                        </span>
                      </div>

                      <h3 className="font-display text-2xl font-semibold leading-tight group-hover:text-accent transition-colors">
                        {p.title}
                      </h3>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                        {p.summary}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {p.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded-md bg-secondary px-2.5 py-1 text-xs font-mono"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="mt-6 flex items-center gap-4 pt-5 border-t border-border">
                        <span className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-accent transition-colors">
                          Open report <FileText className="h-4 w-4" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
};
