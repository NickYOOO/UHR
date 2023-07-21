import React, { useState, useEffect } from 'react';
import InputWithLabel from '../common/input/InputWithLabel';
import Button from '../common/Button';
import * as Styled from './style';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithFB } from '../../api/firebase';

function SignIn() {
  const [formState, setFormState] = useState({
    email: '',
    pwd: '',
  });

  const navigate = useNavigate();
  const { email, password } = formState;

  const isEmailValid = email && email.trim() !== '';
  const isPasswordValid = password && password.trim() !== '';
  const isFormValid = isEmailValid && isPasswordValid;

  const handleLoginInputChange = e => {
    const { name, value } = e.target;

    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const onClickSignInHandler = async e => {
    e.preventDefault();

    try {
      await signInWithFB(email, password);
      alert('로그인에 성공했습니다!');
      navigate('/');
    } catch (error) {
      alert('로그인 실패, 이메일 주소와 비밀번호를 확인해 주세요!');
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Styled.SignInLayout>
      <Styled.SignInForm onSubmit={onClickSignInHandler}>
        <h2>로그인</h2>
        <InputWithLabel
          name="email"
          value={email}
          onChange={handleLoginInputChange}
          required
          w={'100'}
        >
          이메일
        </InputWithLabel>

        <InputWithLabel
          type="password"
          name="password"
          value={password}
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
  );
}

export default SignIn;
