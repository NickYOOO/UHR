// SignUp.js

import React from 'react';
import useFormValidation from '../../hooks/useFormValidation';
import InputWithLabel from '../common/input/InputWithLabel';
import Button from '../common/Button';
import * as Styled from './style';
import { Link, useNavigate } from 'react-router-dom';
import { auth, db } from '../../api/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import useSystemModal from '../../hooks/useSystemModal';

function SignUp() {
  const navigate = useNavigate();
  const { formState, validationMsg, validationState, handleInputChange } = useFormValidation();
  const { closeModal, alertModal, confirmModal, confirmAndClose } = useSystemModal()

  const onClickSignUpHandler = async e => {
    e.preventDefault();

    try {
      const { user } = await createUserWithEmailAndPassword(auth, formState.email, formState.pwd);

      const userData = {
        displayName: formState.displayName,
        email: formState.email,
      };

      await setDoc(doc(db, 'users', user.uid), userData);
      alert('회원가입 완료!');
      navigate('/');
    } catch (err) {
      switch (err.code) {
        case 'auth/weak-password':
          console.log('비밀번호는 6자리 이상이어야 합니다');
          break;
        case 'auth/invalid-email':
          console.log('잘못된 이메일 주소입니다');
          break;
        case 'auth/email-already-in-use':
          console.log('이미 가입되어 있는 계정입니다');
          break;
        default:
          console.log('알 수 없는 오류가 발생했습니다');
          break;
      }
    }
  };

  return (
    <>
      <Styled.SignUpContainer>
        <Styled.SignUpBox>
          <h2>회원가입</h2>
          <Styled.SignUpForm onSubmit={onClickSignUpHandler}>
            <InputWithLabel
              w={100}
              name="displayName"
              type="text"
              value={formState.displayName}
              onChange={handleInputChange}
              required="닉네임은 필수 입력사항 입니다."
            >
              닉네임
            </InputWithLabel>
            <Styled.ValidationMessage isValid={validationState.displayNameState}>
              {validationMsg.displayNameMsg}
            </Styled.ValidationMessage>

            <InputWithLabel
              w={100}
              name="email"
              type="email"
              value={formState.email}
              onChange={handleInputChange}
              required="e-mail 주소는 필수 입력사항 입니다."
            >
              이메일
            </InputWithLabel>
            <Styled.ValidationMessage isValid={validationState.emailState}>
              {validationMsg.emailMsg}
            </Styled.ValidationMessage>

            <InputWithLabel
              w={100}
              name="pwd"
              type="password"
              value={formState.pwd}
              onChange={handleInputChange}
              required="비밀번호는 필수 입력입니다"
            >
              비밀번호
            </InputWithLabel>
            <Styled.ValidationMessage isValid={validationState.pwdState}>
              {validationMsg.pwdMsg}
            </Styled.ValidationMessage>

            <InputWithLabel
              w={100}
              name="confirmPwd"
              type="password"
              value={formState.confirmPwd}
              onChange={handleInputChange}
              required="비밀번호 확인은 필수 입력입니다"
            >
              비밀번호 확인
            </InputWithLabel>
            <Styled.ValidationMessage isValid={validationState.confirmPwdState}>
              {validationMsg.confirmPwdMsg}
            </Styled.ValidationMessage>
            <Styled.ButtonArea>
              <Button size="medium" disabled={!validationState.isFormValid}>
                회원가입
              </Button>
            </Styled.ButtonArea>
          </Styled.SignUpForm>
          <div>
            이미 회원이시라면?
            <Link to="/signin">로그인</Link>
          </div>
        </Styled.SignUpBox>
      </Styled.SignUpContainer>
      {}
    </>
  );
}

export default SignUp;
