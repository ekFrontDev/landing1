import styles from './techniqueCard.module.scss';
import Image from 'next/image';
import React from 'react';

type techniqueCardProps = {
  name: string;
  src: string;
  // width: number;
  // height: number;
};

const TechniqueCard = ({ name, src }: techniqueCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          className={styles.image}
          src={src}
          // width={width}
          // height={height}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          alt={name}
        />
        <div className={styles.overlay}>
          <span className={styles.name}>{name}</span>
        </div>
      </div>
    </div>
  );
};

export default TechniqueCard;
