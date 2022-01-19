import styled from "styled-components";
import {useQuery} from "react-query";
import {STRINGS} from "../constants/ko";
import CoinCard from "../components/CoinCard";
import {CoinListSchema} from "../api/schema/coinList";
import {getCoinList} from "../api/coin";;

const Coins = () => {
  const {isLoading, data} = useQuery<CoinListSchema[]>("Coins", getCoinList);
  return (
    <Container>
      {isLoading
        ? (<span>{STRINGS.loadCoinList}</span>)
        : (<>
          {data?.map((coin) => (
            <CoinCard
              key={coin.id}
              coinId={coin.id}
              coinName={coin.name}
              coinSymbol={coin.symbol}
            />
          ))}
        </>)
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