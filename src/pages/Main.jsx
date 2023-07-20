import React, { useEffect } from 'react';
import Carousel from '../components/carousel/Carousel';
import Youtube from '../components/youtube/Youtube';
import MainBanner from '../components/mainBanner/MainBanner';
import { useSelector } from 'react-redux';
import SystemModal from '../components/systemModal/SystemModal';
import useSystemModal from '../hooks/useSystemModal';

function Main() {
  const modal = useSelector(state => state.systemModal);
  const { alertModal, confirmModal } = useSystemModal()

  const tes = () => {
    confirmModal(true, '테스트')
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <main>
      <MainBanner />
      <button onClick={tes}>테스트</button>
      <Carousel />
      <Youtube />
      {modal.isOpen && <SystemModal />}
    </main>
  );
}

export default Main;
