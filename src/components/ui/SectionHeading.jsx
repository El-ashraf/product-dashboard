import Reveal from "./Reveal";

const SectionHeading = ({ eyebrow, title, description, align = "left", className = "" }) => (
  <Reveal
    className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
  >
    {eyebrow && (
      <p className="eyebrow">
        <span className="h-px w-6 bg-brand-500/60" />
        {eyebrow}
      </p>
    )}
    <h2 className="mt-4 text-display-md">{title}</h2>
    {description && (
      <p className="mt-4 text-base leading-relaxed text-ink-600 dark:text-ink-400">
        {description}
      </p>
    )}
  </Reveal>
);

export default SectionHeading;
