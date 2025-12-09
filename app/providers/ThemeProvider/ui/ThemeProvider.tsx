'use client';
import React, { ReactNode, useMemo, useState, useEffect } from 'react';
import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
} from '../lib/ThemeContext';

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
