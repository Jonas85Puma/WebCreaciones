"use client";

import { createContext, useContext, useEffect, useState, useCallback, useMemo } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Función para obtener tema inicial sin causar reflow
function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  return (localStorage.getItem("theme") as Theme) || "dark";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme);

  // Sincronizar con localStorage y aplicar clase (una sola vez al cambiar)
  useEffect(() => {
    // Usar requestAnimationFrame para evitar reflow forzado
    requestAnimationFrame(() => {
      const root = document.documentElement;
      root.classList.toggle("dark", theme === "dark");
      root.classList.toggle("light", theme === "light");
    });
    localStorage.setItem("theme", theme);
  }, [theme]);

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState(prev => prev === "dark" ? "light" : "dark");
  }, []);

  const value = useMemo(() => ({ theme, setTheme, toggleTheme }), [theme, setTheme, toggleTheme]);

  // Renderizar children inmediatamente, sin esperar mounted
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
