import styles from './ThemeSwitcher.module.scss';
import { useTheme } from '@/app/providers/ThemeProvider/lib/useTheme';

const ThemeSwitcher = () => {
  const { toggleTheme } = useTheme();

  return (
    <div className={styles.ThemeSwitcher}>
      <input className={styles.checkbox} type="checkbox" id="darkmode-toogle" />
      <label
        className={styles.toggle}
        htmlFor="darkmode-toogle"
        onClick={toggleTheme}
      ></label>
    </div>
  );
};

export default ThemeSwitcher;
