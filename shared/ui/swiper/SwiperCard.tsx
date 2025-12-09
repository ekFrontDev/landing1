import 'swiper/css';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import GalleryCard from '../galleryCard/GalleryCard';

const SwiperCard = () => {
  return (
    <>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide>
          <GalleryCard
            name="art7"
            src="/assets/arts/7.jpg"
            sizes="(max-width: 768px) 25vw, 50vw"
          />
        </SwiperSlide>
        <SwiperSlide>
          <GalleryCard
            name="art5"
            src="/assets/arts/5.jpg"
            sizes="(max-width: 768px) 25vw, 50vw"
          />
        </SwiperSlide>
        <SwiperSlide>
          <GalleryCard
            name="art10"
            src="/assets/arts/10.jpg"
            sizes="(max-width: 768px) 25vw, 50vw"
          />
        </SwiperSlide>
        <SwiperSlide>
          <GalleryCard
            name="art7"
            src="/assets/arts/13.jpg"
            sizes="(max-width: 768px) 25vw, 50vw"
          />
        </SwiperSlide>
        <SwiperSlide>
          <GalleryCard
            name="art1"
            src="/assets/arts/1.jpg"
            sizes="(max-width: 768px) 25vw, 50vw"
          />
        </SwiperSlide>
        <SwiperSlide>
          <GalleryCard
            name="art2"
            src="/assets/arts/2.jpg"
            sizes="(max-width: 768px) 25vw, 50vw"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperCard;
