import styles from './ArtPreview.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

export default function ArtPreview() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  return (
    <section
      ref={ref}
      className={`${styles.aboutInvisible} ${isVisible ? styles.visible : ''}`}
    >
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
      <div className={styles.linkWrapper}>
        <Link className={styles.linkGallery} href="/">
          СМОТРЕТЬ В ГАЛЕРЕИ
        </Link>
        <Image
          className={styles.arrow}
          src="/arrowRight.svg"
          width={35}
          height={35}
          alt="arrow"
        />
      </div>
    </section>
  );
}
