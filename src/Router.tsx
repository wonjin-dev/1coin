import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Coins from './pages/Coins/Coins';
import StaredCoins from './pages/Coins/StaredCoins';
import Coin from './pages/Coin/Coin';

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/coins/:coinId" element={<Coin />} />
        <Route path="/coins/stared" element={<StaredCoins />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/" element={<Coins />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;