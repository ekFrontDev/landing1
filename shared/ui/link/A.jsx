import styles from './A.module.scss';
import Link from 'next/link';

export default function A({ href, text, styleVisible }) {
  return (
    <Link className={`${styles.link} ${styles[styleVisible]}`} href={href}>
      <span className={styles.contacts}>{text}</span>
    </Link>
  );
}
