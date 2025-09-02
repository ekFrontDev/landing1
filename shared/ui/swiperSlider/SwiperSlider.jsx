import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from './SwiperSlider.module.scss';

function SwiperSlider({ images }) {
  return (
    <section className={styles.artSlider}>
      <Swiper
        modules={[Navigation, Pagination, Keyboard]}
        spaceBetween={0}
        slidesPerView={1} // По умолчанию 1 слайд
        navigation
        pagination={{ clickable: true }}
        keyboard={{ enabled: true }}
        loop={true}
        centeredSlides={false} // По умолчанию без центрирования
        autoHeight={true}
        className={styles.swiper}
        breakpoints={{
          // Мобильные устройства - начинаем с 0
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: false,
          },
          // Большие телефоны и маленькие планшеты
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: false,
          },
          // Планшеты
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
            centeredSlides: true,
          },
          // Десктоп
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
            centeredSlides: true,
          },
        }}
      >
        {images.map((image) => (
          <SwiperSlide key={image.id} className={styles.slide}>
            <div className={styles.imageContainer}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 20vw"
                className={styles.image}
                priority={image.id === 1}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default SwiperSlider;
