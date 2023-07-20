import React, { useState } from 'react';
import InputWithLabel from '../components/common/input/InputWithLabel';
import Button from '../components/common/Button';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { signInWithFB } from '../api/firebase';

function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChange = event => {
    const {
      target: { name, value },
    } = event;
    if (name === 'email') {
      setEmail(value);
    }
    if (name === 'password') {
      setPassword(value);
    }
  };

  const SignIn = async event => {
    event.preventDefault();
    await signInWithFB(email, password);
  };

  return (
    <SignInLayout>
      <SignInForm onSubmit={SignIn}>
        <h2>로그인</h2>
        <InputWithLabel name="email" value={email} onChange={onChange} w={'100'}>
          이메일
        </InputWithLabel>
        <InputWithLabel
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          w={'100'}
        >
          비밀번호
        </InputWithLabel>
        <Button>로그인</Button>
      </SignInForm>
      <SignUpBox>
        <p>회원이 아니시라면?</p>
        <Link to={`/signup`}>회원가입</Link>
      </SignUpBox>
    </SignInLayout>
  );
}

export default SignInPage;

const SignInLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 640px;
  height: 560px;
  margin: 90px auto;
  border-radius: 16px;
  background-color: #08214110;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`;

const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin: 20px 50px;
  padding: 0px 30px 0px 30px;

  & > h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    font-size: 24px;
    padding: 20px;
  }
`;

const SignUpBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 90px;
  gap: 15px;

  & > a {
    color: #ff7c1d;
    text-decoration: none;
  }
`;
