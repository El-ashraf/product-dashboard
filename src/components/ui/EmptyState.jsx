import { SearchX } from "lucide-react";

const EmptyState = ({
  icon: Icon = SearchX,
  title = "Nothing here yet",
  description,
  action,
}) => (
  <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
    <div className="relative mb-5">
      <div className="absolute inset-0 -m-3 rounded-full bg-brand-500/10 blur-lg" />
      <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-ink-200 bg-white text-brand-600 dark:border-ink-700 dark:bg-ink-900 dark:text-brand-300">
        <Icon size={22} strokeWidth={1.6} />
      </div>
    </div>
    <h3 className="text-display-sm">{title}</h3>
    {description && (
      <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-500 dark:text-ink-400">
        {description}
      </p>
    )}
    {action && <div className="mt-6">{action}</div>}
  </div>
);

export default EmptyState;
