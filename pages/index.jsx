import '../app/styles/global.scss';
import Header from '../widgets/header/ui/Header';
import Footer from '../widgets/footer/ui/Footer';
import GreetingBlock from '../components/GreetingBlock/GreetingBlock';
import Technique from '../components/Technique/Technique';
import ArtPreview from '../components/ArtPreview/ArtPreview';
import AboutMe from '../components/AboutMe/AboutMe';
import ForStudents from '../components/ForStudents/ForStudents';
import PlanAirBlock from '../components/PlanAirBlock/PlanAirBlock';
import SwiperSlider from '../shared/ui/swiperSlider/SwiperSlider';
import {
  galleryImages,
  studentImages,
  planAirImages,
} from '../shared/utils/galleryImages';
import Image from 'next/image';

const Index = () => {
  return (
    <>
      {/* <Head>
        <meta charSet="UTF-8"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <title>Таня Табачок</title>
      </Head> */}

      <body className="">
        <Header img="/menu.svg" hrefBtn="/menu" />
        <main>
          <Image
            className="portfolioArt"
            src="/portfolioArt/portfolioArt.jpg"
            width={550}
            height={550}
            alt=""
          />
          <GreetingBlock />
          <Technique />
          <ArtPreview />
          {/* <SwiperSlider images={galleryImages} /> */}
          {/* <AboutMe /> */}
          {/* <SwiperSlider images={studentImages} /> */}
          {/* <ForStudents /> */}
          {/* <SwiperSlider images={planAirImages} /> */}
          {/* <PlanAirBlock /> */}
        </main>
        <Footer />
      </body>
    </>
  );
};

export default Index;
