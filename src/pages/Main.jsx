import React from 'react';
import Youtube from '../components/youtube/Youtube';
import MainBanner from '../components/mainBanner/MainBanner';
import Search from '../components/common/search/Search';

function Main() {
  return (
    <div>
      <MainBanner />
      <Youtube />
    </div>
  );
}

export default Main;
