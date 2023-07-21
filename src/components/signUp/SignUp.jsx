import React from 'react';
import useFormValidation from '../../hooks/useFormValidation';
import InputWithLabel from '../common/input/InputWithLabel';
import Button from '../common/Button';
import * as Styled from './style';
import { Link, useNavigate } from 'react-router-dom';
import { auth, db } from '../../api/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';

function SignUp() {
  const navigate = useNavigate();
  const { formState, validationMsg, validationState, handleJoinInputChange } = useFormValidation();

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
    <Styled.SignUpLayout>
      <Styled.SignUpForm onSubmit={onClickSignUpHandler}>
        <h2>회원가입</h2>
        <InputWithLabel
          w={100}
          name="displayName"
          type="text"
          value={formState.displayName}
          onChange={handleJoinInputChange}
          required="닉네임은 필수 입력사항 입니다."
        >
          닉네임
        </InputWithLabel>
        <Styled.ValidationMessage color={validationState.displayNameState ? 'green' : 'red'}>
          {validationMsg.displayNameMsg}
        </Styled.ValidationMessage>

        <InputWithLabel
          w={100}
          name="email"
          type="email"
          value={formState.email}
          onChange={handleJoinInputChange}
          required="e-mail 주소는 필수 입력사항 입니다."
        >
          이메일
        </InputWithLabel>
        <Styled.ValidationMessage color={validationState.emailState ? 'green' : 'red'}>
          {validationMsg.emailMsg}
        </Styled.ValidationMessage>

        <InputWithLabel
          w={100}
          name="pwd"
          type="password"
          value={formState.pwd}
          onChange={handleJoinInputChange}
          required="비밀번호는 필수 입력입니다"
        >
          비밀번호
        </InputWithLabel>
        <Styled.ValidationMessage color={validationState.pwdState ? 'green' : 'red'}>
          {validationMsg.pwdMsg}
        </Styled.ValidationMessage>

        <InputWithLabel
          w={100}
          name="confirmPwd"
          type="password"
          value={formState.confirmPwd}
          onChange={handleJoinInputChange}
          required="비밀번호 확인은 필수 입력입니다"
        >
          비밀번호 확인
        </InputWithLabel>
        <Styled.ValidationMessage color={validationState.confirmPwdState ? 'green' : 'red'}>
          {validationMsg.confirmPwdMsg}
        </Styled.ValidationMessage>
        <Styled.ButtonArea>
          <Button size="medium" disabled={!validationState.isFormValid}>
            회원가입
          </Button>
        </Styled.ButtonArea>
      </Styled.SignUpForm>
      <Styled.SignUpBox>
        <p>이미 회원이시라면?</p>
        <Link to="/signin">로그인</Link>
      </Styled.SignUpBox>
    </Styled.SignUpLayout>
  );
}

export default SignUp;
