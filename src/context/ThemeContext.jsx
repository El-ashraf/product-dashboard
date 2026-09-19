/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "darkMode";
const ThemeContext = createContext(undefined);

const resolveInitialTheme = () => {
  if (typeof window === "undefined") return false;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored !== null) return stored === "true";
  } catch {
    // Storage blocked (private mode); fall back to the OS preference.
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(resolveInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    try {
      window.localStorage.setItem(STORAGE_KEY, String(darkMode));
    } catch {
      // Preference simply won't persist.
    }
  }, [darkMode]);

  const toggleTheme = useCallback(() => setDarkMode((previous) => !previous), []);

  const value = useMemo(
    () => ({ darkMode, setDarkMode, toggleTheme }),
    [darkMode, toggleTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used inside a ThemeProvider");
  return context;
};
