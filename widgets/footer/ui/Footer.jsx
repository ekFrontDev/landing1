import A from '../../../shared/ui/link/A';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer>
      <div className={styles.footerWrapper}>
        <span className={styles.contact}>ЕСЛИ ВАС ЗАИНТЕРЕСОВАЛИ РАБОТЫ, ГОТОВА ОБСУДИТЬ ДЕТАЛИ</span>
        <div className={styles.linksContainer}>
          <A href={'https://www.instagram.com/chevengur_tania?igsh=ZGhvYm0wOGJ6MWps'} styleVisible="" text="INSTAGRAM*" />
          <A href={'https://t.me/chevengur_tania'} styleVisible="" text="TELEGRAM" />
          <A href={'https://vk.com/tatutiana'} styleVisible="" text="VK" />
        </div>
        <span className={styles.meta}>*meta, запрещенная в РФ организация</span>
      </div>
    </footer>
  );
}
