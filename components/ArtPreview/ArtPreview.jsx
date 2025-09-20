import styles from './ArtPreview.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function ArtPreview() {
  return (
    <>
      <h2 className={styles.ArtPreviewTtile}>МОИ РАБОТЫ</h2>
      <div className={styles.artPreview}>
        <Image
          className={styles.artPreviewImg}
          src="/arts/7.jpg"
          width={236}
          height={366}
          alt=""
        />
        <Image
          className={styles.artPreviewImg}
          src="/arts/5.jpg"
          width={236}
          height={366}
          alt=""
        />
        <Image
          className={styles.artPreviewImg}
          src="/arts/10.jpg"
          width={236}
          height={366}
          alt=""
        />
        <Image
          className={styles.artPreviewImg}
          src="/arts/13.jpg"
          width={236}
          height={366}
          alt=""
        />
      </div>
      <Link className={styles.linkGallery} href="/">
        СМОТРЕТЬ В ГАЛЕРЕИ
      </Link>
    </>
  );
}
