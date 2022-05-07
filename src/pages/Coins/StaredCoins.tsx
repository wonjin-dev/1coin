import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {useRecoilValue} from 'recoil';
import {staredCoinAtom} from '../../atoms';
import {CoinCardProps} from '../../types';
import {STRINGS} from '../../constants/ko';
import CoinCard from './components/CoinCard';

const StaredCoins = () => {
  const staredCoins = useRecoilValue(staredCoinAtom);
  return (
    <>
      {staredCoins.length > 0 ? (
        <Container>
          <Header>
            <Link to={'/coins'}>{STRINGS.back}</Link>
          </Header>
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
        <Container>
          <Header>
            <Link to={'/coins'}>
              <TextInLoader>
                {STRINGS.back}
              </TextInLoader>
            </Link>
          </Header>
          <DefaultLoader>
            <TextInLoader>
              {STRINGS.noStaredCoin}
            </TextInLoader>
          </DefaultLoader>
        </Container>
      )}
    </>
  );
};

export default StaredCoins;

const Container = styled.div`
  max-width: 480px;
  margin: 0 auto;
  @media screen and (min-width: 1024px) {
	max-width: 100%;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px;
`;

const Cards = styled.div`
  @media screen and (min-width: 1024px) {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 20px;
	margin: 0 10% 0 10%
  }
`;

const DefaultLoader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
  font-size: 20px;
  font-weight: 700;
`;

const TextInLoader = styled.span`
  color: ${(props) => props.theme.textColor};
`;