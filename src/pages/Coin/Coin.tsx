import {Link, useParams} from 'react-router-dom';
import styled from 'styled-components';
import {useQuery} from 'react-query';
import {IoIosArrowDropleftCircle} from 'react-icons/io';
import {STRINGS} from '../../constants/ko';
import {CoinDetailsSchema, CoinTickerSchema, CoinPageRouteParams} from '../../types';
import {getCoinDetails, getCoinTickers} from '../../api/coin';
import Loader from '../../components/Loader';
import Chart from './components/Chart';

const Coin = () => {
  const {coinId} = useParams<CoinPageRouteParams>();
  const {isLoading: infoLoading, data: infoData} = useQuery<CoinDetailsSchema>(
    ['details', coinId],
    () => getCoinDetails(coinId),
    {
      cacheTime: 3600000,
      staleTime: 3600000
    }
  );

  const {isLoading: tickersLoading, data: tickersData} = useQuery<CoinTickerSchema>(
    ['tickers', coinId], () => getCoinTickers(coinId),
    {
      cacheTime: 3600000,
      staleTime: 3600000
    }
  );
  const loading = infoLoading || tickersLoading;
  
  return (
    <>
      {loading ? (
        <Loader
          type ='page'
          text={STRINGS.loadCoinDetails}
        />
      ) : (
        <Container>
          <Header>
            <BackBtnContainer>
              <Link to="/coins">
                <IoIosArrowDropleftCircle />
              </Link>
            </BackBtnContainer>
            <Title>{infoData?.name}</Title>
          </Header>
          <DetailsCotainer>
            <Details>
              <span>{STRINGS.rank}</span>
              <span>{infoData?.rank}</span>
            </Details>
            <Details>
              <span>{STRINGS.price}</span>
              <span>${tickersData?.quotes.USD.price.toFixed(1)}</span>
            </Details>
          </DetailsCotainer>
          <DetailsCotainer>
            <Description>
              {infoData?.description
                ? infoData?.description.length > 300
                  ? `${infoData?.description.slice(0, 300)}  . . .`
                  : infoData?.description
                : null}
            </Description>
          </DetailsCotainer>
          <Chart coinId={coinId} />
        </Container>
      )}
    </>
  );
};

export default Coin;

const Container = styled.div`
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%
`;

const BackBtnContainer = styled.div`
  margin: 10px 50px 0px 0px;
  font-size: 48px;
  color: ${(props) => props.theme.textColor};
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.textColor};
`;

const DetailsCotainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0px;
  padding: 10px 20px;
  background-color: ${(props) => props.theme.cardBgColor};
  border-radius: 10px;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33%;
`;

const Description = styled.p`
  margin: 20px 0px;
`;