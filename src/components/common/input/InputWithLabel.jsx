import React from 'react';
import * as Styled from './style';

export default function InputWithLabel({ children, w, id, ...props }) {
  return (
    <Styled.InputBox w={w}>
      <label htmlFor={id}>{children}</label>
      <input id={id} {...props} />
    </Styled.InputBox>
  );
}
