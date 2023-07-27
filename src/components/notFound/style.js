import { styled } from 'styled-components';
import BackgroundImg from '../../assets/img/404Img.png';

export const FullPageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url(${BackgroundImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  & > h2 {
    font-size: 60px;
    color: #fff;
    margin-bottom: 16px;
  }

  & > h3 {
    font-size: 60px;
    color: #fff;
  }

  & > p {
    font-size: 34px;
    font-weight: 500;
    color: #fff;
    margin-top: 40px;
    cursor: pointer;
  }

  /* @keyframes fadeout {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  } */
`;
