import React from 'react';
import Image from 'next/image';
import GreetingBlock from '../components/GreetingBlock/GreetingBlock';
import ArtPreview from '../components/ArtPreview/ArtPreview';
import TechniqueLapTop from '@/components/TechniqueLapTop/TechniqueLapTop';

const HomePage = () => {
  return (
    <>
      <main>
        <div className="imageFlex">
          <div className="imageContainer">
            <Image
              className="portfolioArt"
              src="/assets/portfolioArt/portfolioArt.jpg"
              fill
              sizes="(max-width: 768px) calc(100vw - 64px), 50vw"
              alt=""
            />
          </div>
          <GreetingBlock />
        </div>
        <TechniqueLapTop />
        <ArtPreview />
      </main>
    </>
  );
};

export default HomePage;
