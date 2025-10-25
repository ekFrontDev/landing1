import { Theme } from '@/app/providers/ThemeProvider';
import { useTheme } from '@/app/providers/ThemeProvider/lib/useTheme';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} aria-label="Переключить тему">
      {theme === Theme.LIGHT ? '🌙' : '☀️'}
    </button>
  );
};

export default ThemeSwitcher;
