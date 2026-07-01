import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { config } from '../data/site';

const ThemeContext = createContext(null);

function getInitialTheme() {
  try {
    const saved = localStorage.getItem('jm-theme');
    if (saved === 'light' || saved === 'dark') return saved;
  } catch (e) {
    /* localStorage unavailable */
  }
  return config.theme === 'light' ? 'light' : 'dark';
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  // Reflect the theme on <html> so the CSS-variable overrides kick in.
  useEffect(() => {
    try {
      document.documentElement.setAttribute('data-theme', theme);
    } catch (e) {
      /* noop */
    }
  }, [theme]);

  // Apply the configurable brand accent once.
  useEffect(() => {
    if (config.gold) {
      try {
        document.documentElement.style.setProperty('--gold', config.gold);
      } catch (e) {
        /* noop */
      }
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem('jm-theme', next);
      } catch (e) {
        /* noop */
      }
      return next;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, isDark: theme !== 'light', toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within a ThemeProvider');
  return ctx;
}
