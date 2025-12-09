import styles from './galleryCard.module.scss';
import Image from 'next/image';
import React from 'react';

type GalleryCardProps = {
  name: string;
  src: string;
  sizes: string;
};

const GalleryCard = ({ name, src, sizes }: GalleryCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          className={styles.image}
          src={src}
          fill
          sizes={sizes}
          alt={name}
        />
      </div>
    </div>
  );
};

export default GalleryCard;
