import styles from '../styles/A.module.scss';
import Link from 'next/link';

export default function A({ href, text }) {
  return (
    <Link className={styles.link} href={href}>
      <span className={styles.contacts}>{text}</span>
    </Link>
  );
}
