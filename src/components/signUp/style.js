import { styled } from 'styled-components';

export const SignUpLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 640px;
  height: 560px;
  margin: 90px auto;
  border-radius: 16px;
  background-color: #08214110;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`;

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 430px;
  margin: 40px 0 30px;
  padding: 0px 20px 0px;

  & > h2 {
    display: flex;
    justify-content: center;
    font-size: 24px;
    padding: 20px;
  }
`;

export const ButtonArea = styled.div`
  margin-top: 24px;
`;

export const SignUpBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;

  & > a {
    color: #ff7c1d;
    text-decoration: none;
  }
`;

export const ValidationMessage = styled.p`
  height: 16px;
  font-size: 14px;
  color: ${props => props.color};
`;
