import React from 'react';
import InputWithLabel from '../common/input/InputWithLabel';
import Button from '../common/Button';
import * as Styled from './style';
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <Styled.SignUpContainer>
      <Styled.SignUpBox>
        <h2>회원가입</h2>
        <Styled.SignUpForm>
          <InputWithLabel w={100}>닉네임</InputWithLabel>
          <InputWithLabel w={100}>이메일</InputWithLabel>
          <InputWithLabel w={100}>비밀번호</InputWithLabel>
          <InputWithLabel w={100}>비밀번호 확인</InputWithLabel>
          <Button>회원가입</Button>
        </Styled.SignUpForm>
        <div>
          이미 회원이시라면?
          <Link to="/signin">로그인</Link>
        </div>
      </Styled.SignUpBox>
    </Styled.SignUpContainer>
  );
}

export default SignUp;
