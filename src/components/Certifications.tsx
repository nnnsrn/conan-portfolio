import { ArrowUpRight, Award, FileText } from "lucide-react";

const certifications = [
  {
    title: "Fundamental Data Processing",
    issuer: "Dicoding Indonesia",
    date: "2026",
    summary: "This certification validates my skills in ETL processes and data manipulation.",
    pdf: "/certifications/dicoding_data processing.pdf",
  },
  {
    title: "Building Gen AI Solutions on Microsoft Azure",
    issuer: "Dicoding Indonesia",
    date: "2026",
    summary: "This certification validates my skills in designing and implementing Gen AI solutions using Microsoft Azure services.",
    pdf: "/certifications/Gen AI Microsoft Azure.pdf",
  },
  {
    title: "Machine Learning on Asah Program",
    issuer: "Dicoding in association with Accenture",
    date: "2026",
    summary: "This certification validates my skills in machine learning concepts, algorithms, and practical applications through the Asah Program.",
    pdf: "/certifications/[Asah 2025] Sertifikat.pdf",
  },
  {
    title: "Data Science on Microsoft Fabric",
    issuer: "Dicoding Indonesia",
    date: "2026",
    summary: "This certification validates my skills in leveraging Microsoft Fabric for data science and analytics tasks.",
    pdf: "/certifications/Data Science Microsoft Fabric.pdf",
  },
  {
    title: "Basic Data Science",
    issuer: "Dicoding Indonesia",
    date: "2026",
    summary: "This certification validates my skills in the fundamentals of data science, including data analysis and visualization.",
    pdf: "/certifications/basic Data Science.pdf",
  },
  {
    title: "Basic Cloud and Gen AI on AWS",
    issuer: "Dicoding Indonesia",
    date: "2025",
    summary: "This certification validates my skills in the fundamentals of cloud computing and generative AI on AWS.",
    pdf: "/certifications/basic Cloud.pdf",
  },
  {
    title: "Responsive Web Design",
    issuer: "FreeCodeCamp",
    date: "2024",
    summary: "This certification demonstrates my proficiency in creating responsive and accessible web designs using HTML, CSS, and modern design principles.",
    pdf: "/certifications/fcc_web design.pdf",
  },
];

export const Certifications = () => {
  return (
    <section id="certifications" className="py-24 lg:py-32 relative bg-secondary/40">
      <div className="container mx-auto">
        <div className="max-w-2xl reveal">
          <div className="font-mono text-xs uppercase tracking-widest text-accent mb-4">
            06 — The Credentials
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold tracking-tight">
            Certifications<span className="text-accent">.</span>
          </h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <a
              key={`${cert.title}-${i}`}
              href={cert.pdf}
              target="_blank"
              rel="noreferrer"
              className="reveal group rounded-2xl border border-border bg-card p-6 hover:border-accent/40 hover:shadow-card transition-smooth"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary group-hover:bg-accent group-hover:text-accent-foreground transition-smooth">
                  <Award className="h-5 w-5" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {cert.date}
                </span>
              </div>

              <h3 className="mt-4 font-display text-xl font-semibold group-hover:text-accent transition-colors">
                {cert.title}
              </h3>
              <div className="mt-2 text-sm text-accent">{cert.issuer}</div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {cert.summary}
              </p>

              <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
                <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-mono uppercase tracking-widest">
                  <FileText className="h-3.5 w-3.5" /> PDF
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-accent transition-colors">
                  Open certificate <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};