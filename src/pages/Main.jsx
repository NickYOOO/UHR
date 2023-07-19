import React from 'react';
import Carousel from '../components/carousel/Carousel';
import Youtube from '../components/youtube/Youtube';
import MainBanner from '../components/mainBanner/MainBanner';

function Main() {
  return (
    <main>
      <MainBanner />
      <Carousel />
      <Youtube />
    </main>
  );
}

export default Main;
