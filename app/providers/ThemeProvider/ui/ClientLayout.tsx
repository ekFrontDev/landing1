'use client';

import { useTheme } from '../lib/useTheme';
import { useEffect } from 'react';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();

  useEffect(() => {
    document.documentElement.className = theme;
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
  }, [theme]);

  return <>{children}</>;
}
