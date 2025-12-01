import React from 'react';
import Image from 'next/image';
import GreetingBlock from '../components/GreetingBlock/GreetingBlock';
import Technique from '../components/Technique/Technique';
import ArtPreview from '../components/ArtPreview/ArtPreview';

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
              sizes="(max-width: 768px) calc(100vw - 20px), 10vw"
              // width={300}
              // height={300}
              style={{ objectFit: 'cover' }}
              alt=""
            />
          </div>
          <GreetingBlock />
        </div>
        <Technique />
        <ArtPreview />
      </main>
    </>
  );
};

export default HomePage;
