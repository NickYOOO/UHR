import { styled } from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 640px;
  height: 597px;
  margin: 90px auto 90px;
  background-color: #d9d9d9;
  border-radius: 18px;
`;

export const SignUpBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    font-size: 24px;
    padding: 20px;
  }

  & > div {
    display: flex;
    justify-content: center;
    /* align-items: center; */
    margin-top: 40px;
  }

  & > div > a {
    margin-left: 8px;
    color: #ff7c1d;
    text-decoration: none;
  }
`;

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0 30px 0;
  gap: 8px;
  width: 430px;
  padding: 0px 20px 0px 20px;
`;

export const ValidationMessage = styled.p`
  height: 16px;
  font-size: 14px;
  color: ${({ isValid }) => (isValid ? 'green' : 'red')};
`;
export const ButtonArea = styled.div`
  margin-top: 32px;
`;
