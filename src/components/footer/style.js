import { styled } from 'styled-components';

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
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

const FooterIcons = styled.div`
  display: inline-flex;
  margin-top: 20px;
  gap: 20px;

  & > a {
    position: relative;
    cursor: pointer;
  }
`;

export { FooterContainer, FooterIcons };
