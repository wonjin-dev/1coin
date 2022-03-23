import {createGlobalStyle} from 'styled-components';
import {useRecoilValue} from 'recoil';
import {darkModeAtom} from './atoms';

const isDarkMode = useRecoilValue(darkModeAtom);

export const GlobalStyle = createGlobalStyle`
  html, body, div, span, h1, ul, img {
    margin: 0;
    padding: 0;
    border: 0;
  }
  body {
    background-color: ${isDarkMode ? '#2f3640' : '#f5f6fa'};
    color: ${isDarkMode ? '#f5f6fa' : '#2f3640'};
  }
  a {
  text-decoration: none;
  color: inherit;
  }
`