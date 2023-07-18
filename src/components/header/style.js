import { styled } from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  padding: 15px;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  background-color: #082141;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > h1 {
    color: #fff;
    font-size: 24px;
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
    font-size: 16px;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: inherit;
    padding: 0 20px;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  & > a:first-child {
    border-right: 1px solid #eee;
  }
`;
