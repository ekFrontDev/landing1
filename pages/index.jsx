import '../styles/global.scss';
import Image from 'next/image';
import ArtName from '../components/ArtName';
import AboutMe from '../components/AboutMe';
import PreViewBlock from '../components/PreViewBlock';
import TgName from '../components/TgName';
import A from '../components/A';
import ForStudents from '../components/ForStudents';
import PlanAirBlock from '../components/PlanAirBlock';
import SimpleSlider from '../components/Slider';

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
        <header>
          <div className="navBar">
            <span>
              <a href="#aboutMe">ОБО МНЕ</a>
            </span>
            <Image
              className="scribble"
              src="/scribble.svg"
              width={60}
              height={60}
            />
            <A href={'/menu'} text={'МЕНЮ'} />
          </div>
          <ArtName />
        </header>
        <main>
          <SimpleSlider />
          {/* <PreViewBlock text={'ПРЕВЬЮ РАБОТ'} /> */}
          <AboutMe />
          <PreViewBlock text={'ПРЕВЬЮ РАБОТ СТУДЕНТОВ'} />
          <ForStudents />
          <PreViewBlock text={'ПРЕВЬЮ ПОЕЗДОК НА ПЛЕНЕР'} />
          <PlanAirBlock />
        </main>
        <footer>
          <div className="footerWrapper">
            <div>
              <A href={'*'} text={'INSTAGRAM'} />
              <A href={'https://t.me/chevengur_tania'} text={'TELEGRAM'} />
              <A href={'mailto:tabachok.t.v@mail.ru'} text={'EMAIL'} />
            </div>
            <TgName />
          </div>
        </footer>
      </body>
    </>
  );
};

export default Index;
