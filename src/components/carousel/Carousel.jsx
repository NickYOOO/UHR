import React, { useState } from 'react';
import * as Styled from './style';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import './style.css';
import 'swiper/css';
import 'swiper/css/navigation';
import { useQuery } from '@tanstack/react-query';
import { getHeritageImages, getTopTenHeritages } from '../../api/heritage';
import shortid from 'shortid';
import { useNavigate } from 'react-router-dom';
import Loading from '../loading/Loading';

const Carousel = () => {
  const navigate = useNavigate();

  const { data: heritages, isLoading } = useQuery(['carousel'], getTopTenHeritages, {
    select: ({ children }) => {
      const items = children
        .filter(item => {
          return item.name === 'item';
        })
        .map(item => item.children);
      return items;
    },
  });

  const imgParam = heritages?.map(item => {
    const need = {
      ccbaKdcd: item[9].value,
      ccbaCtcd: item[10].value,
      ccbaAsno: item[11].value,
    };
    return need;
  });

  const { data: imgUrl, isLoading: imgIsLoading } = useQuery(
    ['carouselImages'],
    async () => {
      const res = await getHeritageImages(imgParam);
      return res;
    },
    {
      enabled: !!imgParam,
    }
  );

  if (isLoading || imgIsLoading) {
    return <Loading text={'이미지 불러오는 중...'} />;
  }

  const goToDetail = item => {
    const id = item[13].value;
    navigate(`/detail/${id}`, {
      state: { ccbaKdcd: item[9].value, ccbaCtcd: item[10].value, ccbaAsno: item[11].value },
    });
  };

  return (
    <Styled.CarouselLayout>
      <Styled.CarouselNameBox>
        <Styled.CarouselName>국보</Styled.CarouselName>
      </Styled.CarouselNameBox>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={5}
        navigation
        loop={true}
        scrollbar={{ draggable: true }}
        breakpoints={{
          360: {
            slidesPerView: 2,
          },
          576: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 5,
          },
        }}
        className="mySwiper"
      >
        {imgUrl &&
          heritages.map((item, i) => {
            return (
              <SwiperSlide key={shortid.generate()} onClick={() => goToDetail(item)}>
                <Styled.Figure>
                  <Styled.FigureImg src={imgUrl[i]} alt={item[4].value} />
                  <Styled.FigureCaption>{item[4].value.replace(/ >/g, '')}</Styled.FigureCaption>
                </Styled.Figure>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </Styled.CarouselLayout>
  );
};

export default Carousel;
