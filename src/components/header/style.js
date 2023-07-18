import { styled } from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  height: 80px;
  padding: 15px;
  background-color: #082141;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > h1 {
    font-size: 24px;
    color: #fff;
  }

  & > img {
    width: 58px;
    height: 58px;
    margin-right: 24px;
    cursor: pointer;
  }
`;

export const UserContainer = styled.div`
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
