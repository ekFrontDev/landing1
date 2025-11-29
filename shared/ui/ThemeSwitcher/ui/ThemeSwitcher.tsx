import styles from './ThemeSwitcher.module.scss';
import { Theme } from '@/app/providers/ThemeProvider';
import { useTheme } from '@/app/providers/ThemeProvider/lib/useTheme';
import { classNames } from '@/shared/lib/classNames/classNames';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className={classNames(styles.ThemeSwitcher, {}, [])} onClick={toggleTheme} aria-label="Переключить тему">
      {theme === Theme.LIGHT ? '☾' : '☀'}
    </button>
  );
};

export default ThemeSwitcher;
