import styled, { css } from 'styled-components';

export const InputBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  & label {
    margin-right: 5px;
    font-size: 16px;
    flex: 0 0 auto;
    ${props =>
      props.w &&
      css`
        width: ${props.w}px;
      `};
  }

  & input {
    flex: 1 0 auto;
    padding: 4px 8px;
    border: 1px solid #bdbdbd;
    border-radius: 4px;
    font-size: 16px;

    &:focus,
    &:focus-visible {
      outline: none;
    }
  }
`;
