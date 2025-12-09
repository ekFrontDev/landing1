'use client';
import styles from './ArtPreview.module.scss';
import Link from 'next/link';
import GalleryCard from '@/shared/ui/galleryCard/GalleryCard';
import SwiperCard from '@/shared/ui/swiper/SwiperCard';
import useIntersectionObserver from '../../shared/hooks/useIntersectionObserver';

export default function ArtPreview() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  return (
    <section ref={ref} className={`${styles.aboutInvisible} ${isVisible ? styles.visible : ''}`}>
      <h2 className={styles.ArtPreviewTitle}>( МОИ РАБОТЫ )</h2>
      <SwiperCard />
      <div className={styles.linkWrapper}>
        <Link className={styles.linkGallery} href="/gallery">
          СМОТРЕТЬ В ГАЛЕРЕЕ
        </Link>
      </div>
    </section>
  );
}
