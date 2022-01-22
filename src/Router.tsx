import {BrowserRouter, Switch, Route} from "react-router-dom";
import Coins from "./pages/Coins";
import Coin from "./pages/Coin";
import Landing from "./pages/Lading";

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
          <Landing />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;