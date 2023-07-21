import { styled } from 'styled-components';

export const ModalLayout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.24);
`;

export const ModalBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 300px;
  height: 150px;
  padding: 10px;
  background-color: #fff;
  border-radius: 8px;
`;

export const ModalParagraph = styled.p`
  font-size: 18px;
  font-family: 'omnigothic030';
`;

export const ModalBtnBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  width: 100%;
`;

export const ModalSpan = styled.span`
  font-size: 14px;
`;
