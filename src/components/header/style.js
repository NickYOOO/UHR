import { styled } from 'styled-components';

export const Header = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  height: 80px;
  padding: 15px;
  background-color: #082141;
  z-index: 999;
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  & > h1 {
    font-size: 24px;
    color: #fff;

    @media screen and (max-width: 576px) {
      display: none;
    }
  }

  & > img {
    width: 48px;
    height: 48px;
    margin-right: 24px;
    cursor: pointer;
  }
`;

export const UserBox = styled.div`
  display: flex;
  align-items: center;

  & > a {
    color: #fff;
    outline: inherit;
    text-decoration: none;
    padding: 0 20px;
    background: none;
    border: none;
    font-size: 16px;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }

  & > a:first-child {
    border-right: 1px solid #eee;
  }
`;
