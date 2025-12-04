import TechniqueCard from '@/shared/ui/techniqueCard/TechniqueCard';
import styles from './TechniqueLapTop.module.scss';

const TechniqueLapTop = () => {
  return (
    <div className={styles.techniqueWrapper}>
      <ul className={styles.techniqueList}>
        <li className={`${styles.elem} ${styles.oil}`}>
          <TechniqueCard
            name="Масло"
            src="/assets/techniqueArts/масло.jpeg"
            // width={400}
            // height={550}
          />
        </li>
        <li className={styles.elem}>
          <TechniqueCard
            name="Акрил"
            src="/assets/techniqueArts/акрил.jpeg"
            // width={400}
            // height={550}
          />
        </li>
        <li className={styles.elem}>
          <TechniqueCard
            name="Темпера"
            src="/assets/techniqueArts/темпера.jpeg"
            // width={400}
            // height={550}
          />
        </li>
        <li className={styles.elem}>
          <TechniqueCard
            name="Акварель"
            src="/assets/techniqueArts/акварель.jpeg"
            // width={400}
            // height={550}
          />
        </li>
        <li className={styles.elem}>
          <TechniqueCard
            name="Гуашь"
            src="/assets/techniqueArts/гуашь.jpeg"
            // width={400}
            // height={550}
          />
        </li>
        <li className={styles.elem}>
          <TechniqueCard
            name="Уголь"
            src="/assets/techniqueArts/уголь.jpeg"
            // width={400}
            // height={550}
          />
        </li>
        <li className={styles.elem}>
          <TechniqueCard
            name="Карандаш"
            src="/assets/techniqueArts/карандаш.jpeg"
            // width={400}
            // height={550}
          />
        </li>
        <li className={styles.elem}>
          <TechniqueCard
            name="Коллаж"
            src="/assets/techniqueArts/коллаж.jpeg"
            // width={400}
            // height={550}
          />
        </li>
      </ul>
    </div>
  );
};

export default TechniqueLapTop;
