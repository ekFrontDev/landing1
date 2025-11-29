import TgName from '../../../components/TgName/TgName';
import A from '../../../shared/ui/link/A';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer>
      <div className={styles.footerWrapper}>
        <div className={styles.linksContainer}>
          <A href={'https://www.instagram.com/chevengur_tania?igsh=ZGhvYm0wOGJ6MWps'} styleVisible="" logoName="instLogo.svg" />
          <A href={'https://t.me/chevengur_tania'} styleVisible="" logoName="tgLogo.svg" />
          <A href={'https://vk.com/tatutiana'} styleVisible="" logoName="vkLogo.svg" />
        </div>
        <TgName />
      </div>
    </footer>
  );
}
