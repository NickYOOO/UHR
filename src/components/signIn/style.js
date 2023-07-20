import { styled } from 'styled-components';

export const SignInLayout = styled.div`
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

export const SignInForm = styled.form`
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

export const SignUpBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 90px;
  gap: 15px;

  & > a {
    color: #ff7c1d;
    text-decoration: none;
  }
`;

export const ValidationMessage = styled.p`
  height: 16px;
  font-size: 14px;
  color: ${({ isValid }) => (isValid ? 'green' : 'red')};
`;
