const TONES = {
  neutral: "bg-ink-100 text-ink-600 dark:bg-ink-800 dark:text-ink-300",
  brand: "bg-brand-50 text-brand-700 dark:bg-brand-950/70 dark:text-brand-300",
  positive: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300",
  caution: "bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300",
  critical: "bg-rose-50 text-rose-700 dark:bg-rose-950/50 dark:text-rose-300",
};

const Badge = ({ tone = "neutral", dot = false, className = "", children }) => (
  <span
    className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium
                ${TONES[tone] ?? TONES.neutral} ${className}`}
  >
    {dot && <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />}
    {children}
  </span>
);

export default Badge;
