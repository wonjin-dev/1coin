import {createGlobalStyle} from 'styled-components';
import {COLORS} from './constants/colors';

export const GlobalStyle = createGlobalStyle`
  html, body, div, span, h1, ul, img {
    margin: 0;
    padding: 0;
    border: 0;
  }
  body {
    background-color: ${COLORS.mainBackgroundColor};
    color: ${COLORS.mainTextColor};
  }
  a {
  text-decoration: none;
  color: inherit;
  }
`