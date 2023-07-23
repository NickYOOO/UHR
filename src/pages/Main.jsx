import React, { useEffect } from 'react';
import Carousel from '../components/carousel/Carousel';
import Youtube from '../components/youtube/Youtube';
import MainBanner from '../components/mainBanner/MainBanner';

function Main() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <main>
      <MainBanner />
      <Carousel />
      <Youtube />
    </main>
  );
}

export default Main;
