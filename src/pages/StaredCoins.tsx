import { Link } from 'react-router-dom';
import {useRecoilValue} from 'recoil';
import {staredCoinAtom} from '../atoms';
import CoinCard from '../components/CoinCard';
import Loader from '../components/Loader';
import { STRINGS } from '../constants/ko';
import { CoinCardProps } from '../types';

const StaredCoins = () => {
  const staredCoins = useRecoilValue(staredCoinAtom);
  return (
    <>
      {staredCoins.length > 0 ? (
        <>
          <Link to={'/coins'}>돌아가기</Link>
          {staredCoins.map((coin: CoinCardProps, i: number) => {
            return (
              <CoinCard
                key={i}
                coinId={coin.coinId}
                coinName={coin.coinName}
                coinSymbol={coin.coinSymbol}
                isStared={coin.isStared}
              />
            )
          })}</>
      ) : (
        <>
          <Link to={'/coins'}>돌아가기</Link>
          <Loader
            type={'page'}
            text={STRINGS.noStaredCoin}
          />
        </>
      )}
    </>
  ) ;
};

export default StaredCoins;