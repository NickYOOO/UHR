import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSystemModal } from '../redux/modules/systemModalSlice';

const useSystemModal = () => {
  const modal = useSelector(state => state.systemModal);
  const [confirmKey, setConfirmKey] = useState('');
  const [mutation, setMutation] = useState(null);

  const dispatch = useDispatch();

  const alertModal = (isOpen, msg) => {
    dispatch(setSystemModal({ isOpen, msg, type: false }));
  };
  const confirmModal = (isOpen, msg, id, mu) => {
    setConfirmKey(id);
    setMutation(mu);
    dispatch(setSystemModal({ isOpen, msg, type: true }));
  };
  const closeModal = () => {
    dispatch(setSystemModal({ isOpen: false, msg: '' }));
  };

  const confirmDeleteComment = () => {
    dispatch(setSystemModal({ isOpen: false, msg: '' }));
    mutation.mutate(confirmKey);
    setConfirmKey('');
    setMutation(null);
  };

  return { closeModal, alertModal, confirmModal, confirmDeleteComment };
};

export default useSystemModal;
