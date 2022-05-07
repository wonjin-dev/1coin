import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Coins from './pages/Coins/Coins';
import StaredCoins from './pages/Coins/StaredCoins';
import Coin from './pages/Coin/Coin';
import LoginPage from './pages/Landing/LoginPage';
import RegisterPage from './pages/Landing/RegisterPage';

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/coins/:coinId" element={<Coin />} />
        <Route path="/coins/stared" element={<StaredCoins />} />
        <Route path="/coins/register" element={<RegisterPage />} />
        <Route path="/coins/login" element={<LoginPage />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/" element={<Coins />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;