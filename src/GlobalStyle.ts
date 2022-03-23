import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body, div, span, h1, ul, img {
    margin: 0;
    padding: 0;
    border: 0;
  }
  body {
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
  }
  a {
  text-decoration: none;
  color: inherit;
  }
`