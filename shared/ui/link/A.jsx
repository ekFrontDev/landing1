import styles from './A.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export default function A({ href, styleVisible, text }) {
  return (
    <Link className={`${styles.link} ${styles[styleVisible]}`} href={href}>
      <span className={styles.contacts}>{text}</span>
    </Link>
  );
}
