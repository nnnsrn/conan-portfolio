interface Props {
  className?: string;
}

export const MagnifierLogo = ({ className = "h-8 w-8" }: Props) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="26" cy="26" r="16" stroke="hsl(var(--primary))" strokeWidth="3" />
    <circle cx="26" cy="26" r="11" fill="hsl(var(--accent) / 0.12)" />
    <line x1="38" y1="38" x2="54" y2="54" stroke="hsl(var(--primary))" strokeWidth="4" strokeLinecap="round" />
    <circle cx="22" cy="22" r="3" fill="hsl(var(--background))" opacity="0.85" />
  </svg>
);
