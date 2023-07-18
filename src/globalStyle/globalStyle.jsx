import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import '../assets/font/font.css';

const GlobalStyles = createGlobalStyle`
  ${reset};
  h1 {
    font-family: 'didimmyungjo050';
  }
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'omnigothic030';
  }
  p,
  span {
    font-family: 'omnigothic020';
  }
`;

export default GlobalStyles;
