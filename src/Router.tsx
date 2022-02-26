import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {STRINGS} from './constants/ko';
import Landing from './pages/Lading';
import Coins from './pages/Coins';
import Coin from './pages/Coin';

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/coins/:coinId">
          <Coin />
        </Route>
        <Route path="/coins">
          <Coins />
        </Route>
        <Route path="/">
          <Landing title={STRINGS.pjName} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;