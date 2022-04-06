import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Coins from './pages/Coins';
import Coin from './pages/Coin';

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/coins/:coinId" element={<Coin />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/" element={<Coins />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;