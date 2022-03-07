import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Landing from './pages/Landing';
import Register from './pages/Register';
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
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;