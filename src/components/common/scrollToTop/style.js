import { styled } from 'styled-components';

export const ScrollTopTopBox = styled.div`
  position: fixed;
  right: 5%;
  top: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: #fff;
  background: #ff7c1d;
  box-shadow: 0px 0px 12px 2px #0000001f;
  cursor: pointer;
  z-index: 999;

  & svg {
    font-size: 28px;
  }
`;
