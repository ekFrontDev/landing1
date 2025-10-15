import styles from './page.module.scss';
import { galleryImages } from '../../shared/utils/galleryImages';
import Link from 'next/link';
import Image from 'next/image';

const Gallery = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.tittle}>ГАЛЕРЕЯ</div>
      <div className={styles.artWrapper}>
        {galleryImages.map((el) => {
          return (
            <Link key={el.id} className={styles.link} href={`/artItem/${el.id}`}>
              <div>
                <Image src={el.src} width={150} height={220} alt="" />
              </div>
              <div className={styles.name}>{el.title}</div>
              <div className={styles.date}>2024</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
