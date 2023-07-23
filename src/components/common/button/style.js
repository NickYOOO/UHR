import { css, styled } from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  text-align: center;
  vertical-align: middle;
  border: none;
  color: ${({ fc }) => (fc ? fc : '#FFF')};
  background-color: ${({ bc }) => (bc ? bc : '#ff7c1d')};
  &:hover {
    background-color: #ff7c1d;
  }
  &:disabled {
    background-color: #888;
    &:hover {
      cursor: not-allowed;
    }
  }

  ${({ size }) => {
    switch (size) {
      case 'small':
        return css`
          width: 100px;
          height: 40px;
          border-radius: 8px;
          font-size: 16px;
        `;
      case 'medium':
        return css`
          width: 140px;
          height: 45px;
          border-radius: 10px;
          font-size: 18px;
        `;
      case 'large':
        return css`
          width: 180px;
          height: 50px;
          border-radius: 12px;
          font-size: 20px;
        `;
      default:
        return css`
          width: 100px;
          height: 40px;
          border-radius: 8px;
          font-size: 16px;
        `;
    }
  }}
  ${({ w, h }) => {
    return css`
      width: ${w};
      height: ${h};
    `;
  }}
`;