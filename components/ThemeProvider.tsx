"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  // Inicializar en el cliente
  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    if (stored === "dark" || stored === "light") {
      setThemeState(stored);
    } else {
      // Por defecto modo oscuro
      setThemeState("dark");
    }
    setMounted(true);
  }, []);

  // Aplicar clase dark/light al documento
  useEffect(() => {
    if (!mounted) return;
    
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
    }
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState(prev => prev === "dark" ? "light" : "dark");
  }, []);

  const value = { theme, setTheme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>
      {mounted ? children : null}
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
