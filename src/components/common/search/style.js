import { styled } from 'styled-components';

export const SearchBox = styled.div`
  display: flex;
  width: 1190px;
  align-items: center;
  justify-content: center;
  /* gap: 16px; */
  margin: 0 auto;
  padding: 32px 0;
  background-color: ${({ bg }) => (bg ? bg : '#FFF')};
  border-radius: 20px;
  transition: width 0.1s;

  & * {
    flex-shrink: 0;
  }

  & label,
  & input,
  & select,
  & option {
    font-size: 22px;
  }

  @media screen and (max-width: 1200px) {
    width: 982px;
    & input {
      width: 230px;
    }
  }

  @media screen and (max-width: 992px) {
    width: 556px;
    flex-direction: column;
    align-items: flex-start;
    padding: 32px 50px;

    & label,
    & input,
    & select,
    & option,
    & button {
      font-size: 18px;
    }
    & input {
      width: 30px;
    }
  }

  @media screen and (max-width: 576px) {
    width: 340px;
    padding: 20px;

    & label,
    & input,
    & select,
    & option,
    & button {
      font-size: 16px;
    }
  }
`;

export const InputWithLabelBox = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;

  & > div {
    width: 80%;
  }

  & label {
    color: #fff;
  }

  @media screen and (max-width: 992px) {
    width: 100%;
    gap: 20px;
  }

  @media screen and (max-width: 576px) {
    width: 100%;
    & > div {
      width: 70%;

      & > input {
        width: 70%;
      }
    }
  }
`;
