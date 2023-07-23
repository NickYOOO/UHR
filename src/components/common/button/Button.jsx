import React from 'react';
import * as Style from './style';

const Button = ({ children, ...props }) => {
  return <Style.Button {...props}>{children}</Style.Button>;
};

export default Button;
