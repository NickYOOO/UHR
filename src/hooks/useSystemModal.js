import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSystemModal } from '../redux/modules/systemModalSlice';

const useSystemModal = () => {
  const modal = useSelector(state => state.systemModal);

  const dispatch = useDispatch();

  const alertModal = (isOpen, msg) => {
    dispatch(setSystemModal({ isOpen, msg, type: false, isConfirm: false }));
  };
  const confirmModal = (isOpen, msg) => {
    dispatch(setSystemModal({ isOpen, msg, type: true, isConfirm: false }));
  };
  const closeModal = () => {
    dispatch(setSystemModal({ isOpen: false, msg: '' }));
  };
  const confirmAndClose = () => {
    dispatch(setSystemModal({ isOpen: false, msg: '', isConfirm: true }));
  };

  return { closeModal, alertModal, confirmModal, confirmAndClose };
};

export default useSystemModal;
