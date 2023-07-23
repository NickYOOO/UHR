import React, { useState, useEffect } from 'react';
import InputWithLabel from '../common/input/InputWithLabel';
import Button from '../common/button/Button';
import * as Styled from './style';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithFB } from '../../api/firebase';
import useSystemModal from '../../hooks/useSystemModal';
import { SystemModal } from '../systemModal/SystemModal';

function SignIn() {
  const [formState, setFormState] = useState({
    email: '',
    pwd: '',
  });

  const systemModal = useSelector(state => state.systemModal);
  const { alertModal, closeModal } = useSystemModal();
  const navigate = useNavigate();

  const isEmailValid = formState.email && formState.email.trim() !== '';
  const isPasswordValid = formState.pwd && formState.pwd.trim() !== '';
  const isFormValid = isEmailValid && isPasswordValid;

  const handleLoginInputChange = e => {
    const { name, value } = e.target;

    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const onClickSignInHandler = async e => {
    e.preventDefault();

    try {
      await signInWithFB(formState.email, formState.pwd);
      navigate('/');
    } catch (error) {
      alertModal(true, error.message);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Styled.SignInLayout>
        <Styled.SignInForm onSubmit={onClickSignInHandler}>
          <h2>로그인</h2>
          <InputWithLabel
            name="email"
            value={formState.email}
            onChange={handleLoginInputChange}
            required
            w={'100'}
          >
            이메일
          </InputWithLabel>

          <InputWithLabel
            type="password"
            name="pwd"
            value={formState.pwd}
            onChange={handleLoginInputChange}
            required
            w={'100'}
          >
            비밀번호
          </InputWithLabel>

          <Styled.ButtonArea>
            <Button size="medium" disabled={!isFormValid}>
              로그인
            </Button>
          </Styled.ButtonArea>
        </Styled.SignInForm>
        <Styled.SignUpBox>
          <p>회원이 아니시라면?</p>
          <Link to={`/signup`}>회원가입</Link>
        </Styled.SignUpBox>
      </Styled.SignInLayout>
      {systemModal.isOpen && <SystemModal closeModal={closeModal} />}
    </>
  );
}

export default SignIn;
