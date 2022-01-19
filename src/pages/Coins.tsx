import {useQuery} from "react-query";
import {CoinListSchema} from "../api/schema/coinList";
import {getCoinList} from "../api/coin";

const Coins = () => {
  const {data} = useQuery<CoinListSchema[]>("Coins", getCoinList);
  return (
    <>
      {data?.map((coin: CoinListSchema) => (
        <div key={coin.id}>
          <img src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`} />
          {coin.name}
        </div>
      ))}
    </>
  )
}
  
export default Coins;