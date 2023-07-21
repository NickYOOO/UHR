import React, { useState } from 'react';
import InputWithLabel from '../common/input/InputWithLabel';
import Button from '../common/Button';
import * as Styled from './style';
import { Link } from 'react-router-dom';
import { signInWithFB } from '../../api/firebase';

function SignIn() {
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
    <Styled.SignInLayout>
      <Styled.SignInForm onSubmit={SignIn}>
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
        <Styled.ButtonArea>
          <Button size="medium">로그인</Button>
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
