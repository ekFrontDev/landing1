import styles from '../styles/menu.module.scss';
import Image from 'next/image';

const Menu = () => {
  return (
    <div className={styles.menu}>
      <div>
        <button className={styles.btnBack}>
          <a href={'/'}>
            <Image src="/cross1.svg" width={110} height={110} />
          </a>
        </button>
      </div>
      <div>
        <ul className={styles.list}>
          <li>АРХИВ</li>
          <li>ДЛЯ УЧЕНИКОВ</li>
          <li>КОНТАКТЫ</li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
