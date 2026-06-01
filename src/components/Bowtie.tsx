interface Props {
  className?: string;
}

/** Conan's signature red bowtie — used as a small flourish */
export const Bowtie = ({ className = "h-4 w-6" }: Props) => (
  <svg viewBox="0 0 48 24" className={className} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2 4 L20 12 L2 20 Z"
      fill="hsl(var(--bowtie))"
    />
    <path
      d="M46 4 L28 12 L46 20 Z"
      fill="hsl(var(--bowtie))"
    />
    <rect x="20" y="8" width="8" height="8" rx="1.5" fill="hsl(var(--bowtie))" />
    <rect x="20" y="8" width="8" height="8" rx="1.5" fill="hsl(0 0% 0% / 0.15)" />
  </svg>
);
