import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Landing from './pages/Landing';
import Register from './pages/Register';
import Coins from './pages/Coins';
import Coin from './pages/Coin';

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/coins/:coinId" element={<Coin />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;