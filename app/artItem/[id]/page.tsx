'use client';
import styles from './page.module.scss';
import { useParams } from 'next/navigation';
import { galleryImages } from '../../../shared/utils/galleryImages';
import { Button } from '../../../shared/ui/button';
import Image from 'next/image';

const ArtItem = () => {
  const params = useParams();
  const id = params.id as string;
  const artWork = galleryImages.find((el) => el.id === Number(id));

  if (!artWork) {
    return <div>Работа не найдена</div>;
  }

  const { src, title } = artWork;
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div>{title}</div>
        <Button text="Закрыть" href="/gallery" />
      </div>

      <div className={styles.description}>
        Wool, acrylic, cotton / 150х90 cm
      </div>
      <div className={styles.description}>/ 2023</div>
      <Image
        className={styles.image}
        src={src}
        width={300}
        height={440}
        alt=""
      />
      <Image
        className={styles.image}
        src={src}
        width={300}
        height={440}
        alt=""
      />
    </div>
  );
};

export default ArtItem;
