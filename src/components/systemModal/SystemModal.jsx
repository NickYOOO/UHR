import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import * as Styled from './style';
import { useSelector } from 'react-redux';
import Button from '../common/button/Button';

export const SystemModal = ({ confirmAndClose, closeModal }) => {
  useEffect(() => {
    document.body.style = 'overflow: hidden';
    return () => (document.body.style = 'overflow: auto');
  });

  const modal = useSelector(state => state.systemModal);

  return createPortal(
    <Styled.ModalLayout>
      <Styled.ModalBox>
        <Styled.ModalParagraph>{modal.msg}</Styled.ModalParagraph>
        <Styled.ModalBtnBox>
          <Button size={'small'} onClick={confirmAndClose || closeModal}>
            확인
          </Button>
          {modal.type && <Button onClick={closeModal}>취소</Button>}
        </Styled.ModalBtnBox>
      </Styled.ModalBox>
    </Styled.ModalLayout>,
    document.getElementById('modal-portal')
  );
};

export const TimerModal = ({ setIsModalOpen, text, subText }) => {
  useEffect(() => {
    document.body.style = 'overflow: hidden';

    const timer = setTimeout(() => {
      setIsModalOpen(false);
    }, 1500);

    return () => {
      document.body.style = 'overflow: auto';
      clearTimeout(timer);
      window.location.href = '/';
    };
  });

  return createPortal(
    <Styled.ModalLayout>
      <Styled.ModalBox>
        <Styled.ModalParagraph>{text}</Styled.ModalParagraph>
        <Styled.ModalSpan>{subText}</Styled.ModalSpan>
      </Styled.ModalBox>
    </Styled.ModalLayout>,
    document.getElementById('modal-portal')
  );
};
