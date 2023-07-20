import { useState } from 'react';

const useFormValidation = () => {
  const [formState, setFormState] = useState({
    displayName: '',
    email: '',
    pwd: '',
    confirmPwd: '',
  });

  const [validationMsg, setValidationMsg] = useState({
    displayNameMsg: '',
    emailMsg: '',
    pwdMsg: '',
    confirmPwdMsg: '',
  });

  const [validationState, setValidationState] = useState({
    displayNameState: false,
    emailState: false,
    pwdState: false,
    confirmPwdState: false,
  });

  const handleInputChange = e => {
    const { name, value } = e.target;

    setFormState(prev => ({ ...prev, [name]: value }));

    switch (name) {
      case 'displayName':
        {
          let msg = '';
          let currentState = false;
          if (!validateValue(name, value)) {
            msg = '사용가능한 닉네임이 아닙니다.(특수문자 제외 2~10자)';
            currentState = false;
          } else {
            msg = '사용가능한 닉네임입니다.';
            currentState = true;
          }
          setValidationMsg(prev => ({
            ...prev,
            displayNameMsg: msg,
          }));

          setValidationState(prev => ({
            ...prev,
            displayNameState: currentState,
          }));
        }
        break;
      case 'email':
        {
          let msg = '';
          let currentState = false;

          if (!validateValue(name, value)) {
            msg = '이메일 형식이 올바르지 않습니다.';
            currentState = false;
          } else {
            msg = '사용가능한 이메일입니다.';
            currentState = true;
          }
          setValidationMsg(prev => ({
            ...prev,
            emailMsg: msg,
          }));
          setValidationState(prev => ({
            ...prev,
            emailState: currentState,
          }));
        }
        break;
      case 'pwd':
        {
          let msg = '';
          let currentState = false;
          if (!validateValue(name, value)) {
            msg = '영문(대문자+소문자) 숫자 특수문자 포함 8~15자';
            currentState = false;
          } else {
            msg = '사용가능한 비밀번호입니다.';
            currentState = true;
          }
          setValidationMsg(prev => ({
            ...prev,
            pwdMsg: msg,
          }));
          setValidationState(prev => ({
            ...prev,
            pwdState: currentState,
          }));
        }
        break;
      case 'confirmPwd':
        {
          let msg = '';
          let currentState = false;
          if (formState.pwd !== value) {
            msg = '비밀번호가 일치하지 않습니다.';
            currentState = false;
          } else {
            msg = '비밀번호가 일치합니다.';
            currentState = true;
          }
          setValidationMsg(prev => ({
            ...prev,
            confirmPwdMsg: msg,
          }));
          setValidationState(prev => ({
            ...prev,
            confirmPwdState: currentState,
          }));

          // Input 값이 변경될 때마다 모든 유효성 검사를 통과했는지 확인
          const isFormValid =
            validationState.displayNameState &&
            validationState.emailState &&
            validationState.pwdState &&
            currentState; // 비밀번호 확인 입력란의 상태

          setValidationState(prev => ({
            ...prev,
            isFormValid: isFormValid,
          }));
        }
        break;
      default:
        return;
    }
    // Input 값이 빈 경우 유효성 검사 메시지를 숨김
    if (value.trim() === '') {
      setValidationMsg(prev => ({
        ...prev,
        [`${name}Msg`]: '',
      }));
      setValidationState(prev => ({
        ...prev,
        [`${name}State`]: false,
      }));
    }
  };

  const validateValue = (name, value) => {
    switch (name) {
      case 'displayName':
        return /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]{2,10}$/.test(value);
      case 'email':
        return /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(value);
      case 'pwd':
        return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[~?!@#$%^&*_-]).{8,15}$/.test(value);
      default:
        return false;
    }
  };

  return {
    formState,
    validationMsg,
    validationState,
    handleInputChange,
  };
};

export default useFormValidation;
