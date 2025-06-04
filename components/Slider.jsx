import Slider from 'react-slick';
import Image from 'next/image';
import styles from '../styles/Slider.module.scss';
import PrevArrow from './PrevArrow';
import NextArrow from './NextArrow';

function SimpleSlider() {
  const settings = {
    dots: true,
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '0px',
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 500,
    arrows: true,
    swipe: true,
    touchThreshold: 10,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: true,
          centerMode: true,
          centerPadding: '0px',
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false, // Скрываем стрелки на телефонах
          dots: true,
          centerMode: true, // Центрируем слайд
          centerPadding: '0px', // Убираем боковые отступы для полноэкранного вида
        },
      },
    ],
  };
  const images = [
    { src: '/arts/1.jpg', alt: 'Работа 1' },
    { src: '/arts/2.jpg', alt: 'Работа 2' },
    { src: '/arts/3.jpg', alt: 'Работа 3' },
    { src: '/arts/4.jpg', alt: 'Работа 4' },
    { src: '/arts/5.jpg', alt: 'Работа 5' },
    { src: '/arts/6.jpg', alt: 'Работа 6' },
    { src: '/arts/7.jpg', alt: 'Работа 7' },
    { src: '/arts/8.jpg', alt: 'Работа 8' },
    { src: '/arts/9.jpg', alt: 'Работа 9' },
    { src: '/arts/10.jpg', alt: 'Работа 10' },
    { src: '/arts/11.jpg', alt: 'Работа 11' },
    { src: '/arts/12.jpg', alt: 'Работа 12' },
    { src: '/arts/13.jpg', alt: 'Работа 13' },
  ];
  return (
    <section className={styles.artSlider}>
      <Slider {...settings} className={styles.slider}>
        {images.map((image, idx) => (
          <div key={idx} className={styles.slide}>
            <Image
              src={image.src}
              alt={image.alt}
              width={500}
              height={600}
              sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
              loading="lazy"
              className={styles.image}
              style={{ objectFit: 'contain' }}
            />
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default SimpleSlider;
