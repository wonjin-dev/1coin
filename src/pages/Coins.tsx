import {Link} from "react-router-dom";
import styled from "styled-components";
import {useQuery} from "react-query";
import {COLORS} from "../constants/colors";
import {STRINGS} from "../constants/ko";
import {CoinListSchema} from "../api/schema/coinList";
import {getCoinList} from "../api/coin";

const Coins = () => {
  const {isLoading, data} = useQuery<CoinListSchema[]>("Coins", getCoinList);
    return (
      <Container>
        {isLoading
          ? (<span>{STRINGS.loadCoinList}</span>)
          : (<ul>
            {data?.map((coin) => (
              <Coin key={coin.id}>
                <Link to={{
                  pathname: `/coins/${coin.id}`,
                  state: {name: coin.name},
                }}>
                  <CoinThumbnail src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`} />
                  {coin.name}
                </Link>
              </Coin>
            ))}
          </ul>)
        }
      </Container>
    )
  }
  
export default Coins;

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Coin = styled.li`
  background-color: white;
  color: ${COLORS.mainBackgroundColor};
  border-radius: 15px;
  margin-bottom: 10px;
  a {
    display: flex;
    align-items: center;
    padding: 20px;
  }
`;

const CoinThumbnail = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;