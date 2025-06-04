import styles from '../styles/PreViewBlock.module.scss';

export default function PreViewBlock({ text }) {
  return <div className={styles.preViewBlock}>{text}</div>;
}
