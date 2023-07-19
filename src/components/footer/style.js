import { styled } from 'styled-components';

export const FooterLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 300px;
  padding-top: 50px;
  background: #082141;

  & > p {
    line-height: 2;
    color: #ffffff;
    font-size: 16px;
  }
`;

export const FooterBox = styled.div`
  display: inline-flex;
  margin-top: 20px;
  gap: 20px;

  & > a {
    position: relative;
    cursor: pointer;
  }
`;
