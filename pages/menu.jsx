import styles from '../styles/menu.module.scss';
import Link from 'next/link';
import Header from '../widgets/header/ui/Header';

const Menu = () => {
  return (
    <body>
      <Header img="/cross.svg" hrefBtn="/" />
      <div className={styles.menuWrapper}>
        <Link className={styles.menuLink} href="">
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
    </body>
  );
};

export default Menu;
