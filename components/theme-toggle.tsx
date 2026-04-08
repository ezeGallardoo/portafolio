"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "portfolio-theme";

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  window.localStorage.setItem(STORAGE_KEY, theme);
}

export function ThemeToggle({ locale }: { locale: "es" | "en" }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const rootTheme = document.documentElement.dataset.theme;
    const resolvedTheme: Theme = rootTheme === "dark" ? "dark" : "light";
    setTheme(resolvedTheme);
    setMounted(true);
  }, []);

  const isDark = mounted && theme === "dark";
  const label = locale === "es" ? "Cambiar tema" : "Toggle theme";

  return (
    <button
      type="button"
      className={`theme-toggle${isDark ? " is-dark" : ""}`}
      aria-label={label}
      aria-pressed={isDark}
      title={label}
      onClick={() => {
        const updatedTheme: Theme = theme === "dark" ? "light" : "dark";
        setTheme(updatedTheme);
        applyTheme(updatedTheme);
      }}
    >
      <span className="theme-toggle__track" aria-hidden="true">
        <span className="theme-toggle__thumb">{isDark ? "☾" : "☀"}</span>
      </span>
    </button>
  );
}
