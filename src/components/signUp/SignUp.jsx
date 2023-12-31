import React, { useState } from 'react';
import useFormValidation from '../../hooks/useFormValidation';
import InputWithLabel from '../common/input/InputWithLabel';
import Button from '../common/button/Button';
import * as Styled from './style';
import { Link } from 'react-router-dom';
import { db, signUpWithFB } from '../../api/firebase';
import { doc, setDoc } from 'firebase/firestore';
import useSystemModal from '../../hooks/useSystemModal';
import { useSelector } from 'react-redux';
import { SystemModal, TimerModal } from '../systemModal/SystemModal';

function SignUp() {
  const { formState, validationMsg, validationState, handleJoinInputChange } = useFormValidation();
  const systemModal = useSelector(state => state.systemModal);
  const { alertModal, closeModal } = useSystemModal();
  const [isOpenTimeModal, setIsOpenTimeModal] = useState(false);
  const onClickSignUpHandler = async e => {
    e.preventDefault();

    try {
      const user = await signUpWithFB(formState.email, formState.pwd);

      const userData = {
        displayName: formState.displayName,
        email: formState.email,
      };

      await setDoc(doc(db, 'users', user.uid), userData);
      setIsOpenTimeModal(true);
    } catch (err) {
      alertModal(true, err.message);
    }
  };
  return (
    <>
      <Styled.SignUpLayout>
        <Styled.SignUpForm onSubmit={onClickSignUpHandler}>
          <h2>회원가입</h2>
          <InputWithLabel
            w={110}
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
            w={110}
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
            w={110}
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
            w={110}
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
      {systemModal.isOpen && <SystemModal closeModal={closeModal} />}
      {isOpenTimeModal && (
        <TimerModal
          text={'회원가입 성공!'}
          subText={'잠시 후 메인으로 이동합니다'}
          setIsModalOpen={setIsOpenTimeModal}
        />
      )}
    </>
  );
}

export default SignUp;
