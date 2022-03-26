import Router from './Router';
import {ThemeProvider} from 'styled-components';
import {useRecoilValue} from 'recoil';
import {GlobalStyle} from './GlobalStyle';
import {darkTheme, lightTheme} from './theme';
import {darkModeAtom} from './atoms';

const App = () => {
  const isDark = useRecoilValue(darkModeAtom)
  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </>
  )
}

export default App;
