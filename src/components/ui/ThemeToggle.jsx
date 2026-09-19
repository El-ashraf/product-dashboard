import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const ThemeToggle = ({ className = "" }) => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={darkMode ? "Switch to light theme" : "Switch to dark theme"}
      className={`group relative inline-flex h-9 w-9 items-center justify-center rounded-full
                  border border-ink-200 bg-white text-ink-600 transition-all duration-300 ease-spring
                  hover:border-brand-300 hover:text-brand-600
                  dark:border-ink-700 dark:bg-ink-900 dark:text-ink-300 dark:hover:border-brand-700
                  dark:hover:text-brand-300 ${className}`}
    >
      <Sun
        size={16}
        className="absolute transition-all duration-300 ease-spring dark:rotate-90 dark:scale-0 dark:opacity-0"
      />
      <Moon
        size={16}
        className="absolute rotate-90 scale-0 opacity-0 transition-all duration-300 ease-spring dark:rotate-0 dark:scale-100 dark:opacity-100"
      />
    </button>
  );
};

export default ThemeToggle;
