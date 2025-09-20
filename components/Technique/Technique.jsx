import styles from './Technique.module.scss';

export default function Technique() {
  return (
    <div className={styles.techniqueWrapper}>
      <h2 className={styles.techniqueTitle}>ТЕХНИКИ</h2>
      <div className={styles.technique1}>
        <span>МАСЛО</span>
        <span>АКРИЛ</span>
        <span>ТЕМПЕРА</span>
        <span>АКВАРЕЛЬ</span>
        <span>ГУАШЬ</span>
        <span>УГОЛЬ</span>
        <span>КАРАНДАШ</span>
        <span>КОЛЛАЖ</span>
      </div>
    </div>
  );
}
