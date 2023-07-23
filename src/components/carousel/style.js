import { styled } from 'styled-components';

export const CarouselLayout = styled.section``;

export const CarouselNameBox = styled.div`
  position: relative;
`;
export const CarouselName = styled.h2`
  position: absolute;
  left: 5%;
  bottom: -40px;
  font-size: 20px;
`;
export const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 226px;
`
export const FigureImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 200px;
`
export const FigureCaption = styled.figcaption`
  font-size: 15px;
  font-family: 'omnigothic020';
  padding-top: 10px;
  line-height: 1.4;
  word-break: keep-all;
`