import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import '../assets/font/font.css';

const GlobalStyles = createGlobalStyle`
  ${reset};
  *{
    box-sizing: border-box;
  }
  body {
    padding-top: 80px;
  }
  h1 {
    font-family: 'didimmyungjo050';
  }
  th,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'omnigothic030';
  }
  p,
  tr,
  span,
  a {
    font-family: 'omnigothic020';
  }
`;

export default GlobalStyles;
