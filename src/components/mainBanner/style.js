import { styled } from 'styled-components';
import mainImg from '../../assets/img/mainImg.jpg';

export const MainBannerSection = styled.section`
  position: relative;
  width: 100%;
  height: 820px;
  background: url(${mainImg}) center center / cover no-repeat;
  transition: height 0.4s;

  & .main-text-box {
    position: absolute;
    top: 80px;
    right: 65px;
    text-align: right;
    transition: 0.5s;

    & p:first-child {
      font-size: 40px;
      font-family: 'didimmyungjo040';
      color: #fff;
    }
    & p:last-child {
      margin-top: 35px;
      font-size: 28px;
      font-family: 'didimmyungjo030';
      color: #fffffff0;
    }
  }

  @media screen and (max-width: 1200px) {
    height: 560px;

    & .main-text-box {
      top: 50px;
      right: 35px;

      & p:first-child {
        font-size: 30px;
      }

      & p:last-child {
        margin-top: 24px;
        font-size: 20px;
      }
    }
  }

  @media screen and (max-width: 992px) {
    height: 520px;
  }

  @media screen and (max-width: 576px) {
    height: 360px;

    & .main-text-box {
      top: 34px;
      right: 16px;

      & p:first-child {
        font-size: 20px;
      }

      & p:last-child {
        margin-top: 14px;
        font-size: 14px;
      }
    }
  }
`;
