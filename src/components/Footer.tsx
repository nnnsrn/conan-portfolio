import { NLogo } from "./NLogo";

export const Footer = () => {
  return (
    <footer className="border-t border-border py-10 bg-card">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <NLogo className="h-5 w-5" />
          <span className="font-display font-semibold">Nina</span>
        </div>
        <p className="text-sm text-muted-foreground font-mono">
          © {new Date().getFullYear()} · Built with Next.js, Tailwind CSS, and TypeScript.
        </p>
      </div>
    </footer>
  );
};
