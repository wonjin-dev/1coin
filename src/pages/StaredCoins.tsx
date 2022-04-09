import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {useRecoilValue} from 'recoil';
import {staredCoinAtom} from '../atoms';
import {CoinCardProps} from '../types';
import {STRINGS} from '../constants/ko';
import Loader from '../components/Loader';
import CoinCard from '../components/CoinCard';

const StaredCoins = () => {
  const staredCoins = useRecoilValue(staredCoinAtom);
  return (
    <>
      {staredCoins.length > 0 ? (
        <Container>
          <Link to={'/coins'}>{STRINGS.back}</Link>
          <Cards>
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
            })}
          </Cards>
        </Container>
      ) : (
        <>
          <Link to={'/coins'}>{STRINGS.back}</Link>
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

const Container = styled.div`
  max-width: 480px;
  margin: 0 auto;
  @media screen and (min-width: 1024px) {
	max-width: 100%;
  }
`;

const Cards = styled.div`
  @media screen and (min-width: 1024px) {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 20px;
	margin: 0 10% 0 10%
  }
`;