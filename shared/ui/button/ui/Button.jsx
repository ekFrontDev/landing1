import Link from 'next/link';
import styles from './Button.module.scss';

export const Button = ({ text, href }) => {
  return (
    <button className={styles.button}>
      <Link className={styles.link} href={href}>
        {text}
      </Link>
    </button>
  );
};
