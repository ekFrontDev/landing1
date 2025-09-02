import styles from '../styles/menu.module.scss';
import Image from 'next/image';

const Menu = () => {
  return (
    <div className={styles.menu}>
      <div>
        <button className={styles.btnBack}>
          <a href={'/'}>
            <Image src="/cross1.svg" width={90} height={90} />
          </a>
        </button>
      </div>
      <div>
        <ul className={styles.list}>
          <li>ЖИВОПИСЬ</li>
          <li>ГРАФИКА</li>
          <li>НАБРОСКИ</li>
          <li>ШОП</li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
