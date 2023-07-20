import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import * as Styled from './style';
import { useSelector } from 'react-redux';
import Button from '../common/Button';
import useSystemModal from '../../hooks/useSystemModal';

const SystemModal = () => {
  useEffect(() => {
    document.body.style = 'overflow: hidden';
    return () => (document.body.style = 'overflow: auto');
  });

  const modal = useSelector(state => state.systemModal);
  const { closeModal, confirmAndClose } = useSystemModal();

  return createPortal(
    <Styled.ModalLayout>
      <Styled.ModalBox>
        <Styled.ModalParagraph>{modal.msg}</Styled.ModalParagraph>
        <Styled.ModalBtnBox>
          <Button size={'small'} onClick={confirmAndClose}>
            확인
          </Button>
          {modal.type && <Button onClick={closeModal}>취소</Button>}
        </Styled.ModalBtnBox>
      </Styled.ModalBox>
    </Styled.ModalLayout>,
    document.getElementById('modal-portal')
  );
};

export default SystemModal;
