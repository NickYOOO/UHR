import { styled } from 'styled-components';

export const YoutubeSection = styled.section`
  padding: 60px 0;

  & h2 {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    clip-path: polygon(0 0, 0 0, 0 0);
  }
`;

export const YoutubeWrapperBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  @media screen and (max-width: 576px) {
    flex-direction: column;
  }
`;

export const YoutubeBox = styled.div`
  position: relative;
  width: 50%;
  padding-top: 28.125%;

  @media screen and (max-width: 576px) {
    width: 100%;
    padding-top: 56.25%;
  }
`;
