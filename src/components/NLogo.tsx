interface Props {
  className?: string;
}

export const NLogo = ({ className = "h-8 w-8" }: Props) => (
  <svg
    viewBox="0 0 32 32"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="N logo"
    role="img"
  >
    {/* Faint detective frame */}
    <rect
      x="2"
      y="2"
      width="28"
      height="28"
      rx="1"
      stroke="hsl(var(--primary))"
      strokeOpacity="0.15"
      strokeWidth="1"
    />

    {/* Viewfinder corner ticks — top-left */}
    <line x1="2" y1="6" x2="6" y2="6" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.5" />
    <line x1="6" y1="2" x2="6" y2="6" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.5" />

    {/* Viewfinder corner ticks — bottom-right */}
    <line x1="26" y1="26" x2="30" y2="26" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.5" />
    <line x1="26" y1="26" x2="26" y2="30" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.5" />

    {/* The N — three precise strokes */}
    <line
      x1="10"
      y1="9"
      x2="10"
      y2="23"
      stroke="hsl(var(--primary))"
      strokeWidth="2.4"
      strokeLinecap="butt"
    />
    <line
      x1="10"
      y1="9"
      x2="22"
      y2="23"
      stroke="hsl(var(--primary))"
      strokeWidth="2.4"
      strokeLinecap="butt"
    />
    <line
      x1="22"
      y1="9"
      x2="22"
      y2="23"
      stroke="hsl(var(--primary))"
      strokeWidth="2.4"
      strokeLinecap="butt"
    />

    {/* Single red bow-tie accent dot — top of the right vertical */}
    <circle cx="22" cy="9" r="1.6" fill="hsl(var(--bowtie))" />
  </svg>
);
