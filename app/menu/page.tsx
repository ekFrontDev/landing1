import styles from './page.module.scss';
import Link from 'next/link';

const Menu = () => {
  return (
    <div>
      <div className={styles.menuWrapper}>
        <Link className={styles.menuLink} href="/gallery">
          ГАЛЕРЕЯ
        </Link>
        <Link className={styles.menuLink} href="">
          ЖИВОПИСЬ
        </Link>
        <Link className={styles.menuLink} href="">
          ГРАФИКА
        </Link>
        <Link className={styles.menuLink} href="">
          СМЕШАННАЯ ТЕХНИКА
        </Link>
        <Link className={styles.menuLink} href="">
          УЧЕНИКАМ
        </Link>
        <Link className={styles.menuLink} href="">
          ПЛЕНЕРЫ
        </Link>
        <Link className={styles.menuLink} href="">
          ШОП
        </Link>
      </div>
    </div>
  );
};

export default Menu;
