import styles from './A.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export default function A({ href, styleVisible, logoName }) {
  return (
    <Link className={`${styles.link} ${styles[styleVisible]}`} href={href}>
      {/* <span className={styles.contacts}>{text}</span> */}
      <Image
        className={styles.logo}
        src={`/socialMedia/${logoName}`}
        width={70}
        height={70}
        alt=""
      />
    </Link>
  );
}
