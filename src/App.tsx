import Router from './Router';
import {ThemeProvider} from 'styled-components';
import {useRecoilValue} from 'recoil';
import {GlobalStyle} from './styles/GlobalStyle';
import {darkTheme, lightTheme} from './styles/theme';
import {darkModeAtom} from './store/atoms';

const App = () => {
  const isDark = useRecoilValue(darkModeAtom);
  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </>
  );
};

export default App;