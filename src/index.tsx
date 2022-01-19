import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from "styled-components";
import App from './App';
import {defaultTheme} from "./GlobalStyle";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);