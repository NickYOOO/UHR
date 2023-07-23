import React, { useEffect, useState } from 'react';
import { BiUpArrowAlt } from 'react-icons/bi';
import { ScrollTopTopBox } from './style';

export default function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <>
      {showButton && (
        <ScrollTopTopBox onClick={scrollToTop}>
          <BiUpArrowAlt />
        </ScrollTopTopBox>
      )}
    </>
  );
}
