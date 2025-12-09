import TechniqueCard from '@/shared/ui/techniqueCard/TechniqueCard';
import styles from './TechniqueLapTop.module.scss';

const TechniqueLapTop = () => {
  return (
    <div className={styles.techniqueWrapper}>
      <h3 className={styles.tittle}>(ТЕХНИКИ)</h3>
      <ul className={styles.techniqueList}>
        <li className={`${styles.elem} ${styles.oil}`}>
          <TechniqueCard name="Масло" src="/assets/techniqueArts/масло.jpeg" />
        </li>
        <li className={styles.elem}>
          <TechniqueCard name="Акрил" src="/assets/techniqueArts/акрил.jpeg" />
        </li>
        <li className={styles.elem}>
          <TechniqueCard
            name="Темпера"
            src="/assets/techniqueArts/темпера.jpeg"
          />
        </li>
        <li className={styles.elem}>
          <TechniqueCard
            name="Акварель"
            src="/assets/techniqueArts/акварель.jpeg"
          />
        </li>
        <li className={styles.elem}>
          <TechniqueCard name="Гуашь" src="/assets/techniqueArts/гуашь.jpeg" />
        </li>
        <li className={styles.elem}>
          <TechniqueCard name="Уголь" src="/assets/techniqueArts/уголь.jpeg" />
        </li>
        <li className={styles.elem}>
          <TechniqueCard
            name="Карандаш"
            src="/assets/techniqueArts/карандаш.jpeg"
          />
        </li>
        <li className={styles.elem}>
          <TechniqueCard
            name="Коллаж"
            src="/assets/techniqueArts/коллаж.jpeg"
          />
        </li>
      </ul>
    </div>
  );
};

export default TechniqueLapTop;
