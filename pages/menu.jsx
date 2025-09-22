import styles from '../styles/menu.module.scss';
import Image from 'next/image';
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
    // <div className={styles.menu}>
    //   <div>
    //     <button className={styles.btnBack}>
    //       <a href={'/'}>
    //         <Image src="/cross1.svg" width={90} height={90} />
    //       </a>
    //     </button>
    //   </div>
    //   <div>
    //     <ul className={styles.list}>
    //       <li>ЖИВОПИСЬ</li>
    //       <li>ГРАФИКА</li>
    //       <li>НАБРОСКИ</li>
    //       <li>ШОП</li>
    //     </ul>
    //   </div>
    // </div>
  );
};

export default Menu;
