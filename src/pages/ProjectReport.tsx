import { ArrowLeft, ExternalLink, FileText, Sparkles } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { getProjectById } from "@/data/projects";

const ProjectReport = () => {
  const { projectId } = useParams();
  const project = projectId ? getProjectById(projectId) : undefined;

  if (!project) {
    return (
      <div className="dark min-h-screen bg-background text-foreground flex items-center justify-center px-6">
        <div className="max-w-md text-center">
          <div className="font-mono text-xs uppercase tracking-widest text-accent mb-4">
            Report not found
          </div>
          <h1 className="font-display text-4xl font-bold tracking-tight">This case does not exist.</h1>
          <p className="mt-4 text-muted-foreground">
            The project report you opened is missing or the link is outdated.
          </p>
          <Link
            to="/#projects"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium hover:border-accent hover:text-accent transition-smooth"
          >
            <ArrowLeft className="h-4 w-4" /> Back to projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 bg-hero opacity-80 pointer-events-none" />
        <div className="container mx-auto relative py-20 lg:py-24">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to projects
          </Link>

          <div className="mt-8 max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-muted-foreground backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-accent" /> Case #{project.id} · {project.category}
            </div>

            <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              {project.title}
            </h1>

            <div className="mt-8 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="rounded-md bg-secondary px-3 py-1 text-xs font-mono">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto py-16 lg:py-20 space-y-8">
        <section className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
            <img
              src={project.reportImage ?? project.image}
              alt={`${project.title} preview`}
              className="h-[420px] w-full object-cover sm:h-[520px]"
            />
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <h2 className="font-display text-2xl font-semibold">Design notes</h2>
            <ul className="mt-4 space-y-3 text-muted-foreground leading-relaxed">
              {project.report.designNotes.map((note) => (
                <li key={note} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-accent shrink-0" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <h2 className="font-display text-2xl font-semibold">Features documented</h2>
            <div className="mt-4 space-y-3">
              {project.report.features.map((feature) => (
                <div key={feature} className="flex items-center gap-3 rounded-xl border border-border/80 bg-secondary/50 px-4 py-3 text-sm">
                  <FileText className="h-4 w-4 text-accent" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="rounded-2xl border border-border bg-card p-6 shadow-card">
          <h2 className="font-display text-2xl font-semibold">Outcome</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">{project.report.outcome}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium hover:bg-accent transition-smooth"
            >
              <ArrowLeft className="h-4 w-4" /> Back to projects
            </Link>
            {project.projectLink && (
              <a
                href={project.projectLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-5 py-3 text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
              >
                <ExternalLink className="h-4 w-4" /> Live project
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-5 py-3 text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
              >
                <ExternalLink className="h-4 w-4" /> GitHub repo
              </a>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProjectReport;