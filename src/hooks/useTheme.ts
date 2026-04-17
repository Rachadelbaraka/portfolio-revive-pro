import { useEffect, useState, useCallback } from "react";

type Theme = "dark" | "light";
const KEY = "rachad-theme";

function applyTheme(theme: Theme) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(theme);
  root.style.colorScheme = theme;
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const stored = (typeof window !== "undefined" &&
      (localStorage.getItem(KEY) as Theme | null)) as Theme | null;
    const initial: Theme = stored ?? "dark";
    setTheme(initial);
    applyTheme(initial);
  }, []);

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      applyTheme(next);
      try {
        localStorage.setItem(KEY, next);
      } catch {}
      return next;
    });
  }, []);

  return { theme, toggle };
}
