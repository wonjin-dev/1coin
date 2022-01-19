import {useParams} from "react-router-dom";
import {useQuery} from "react-query";
import {CoinDetailsSchema} from "../api/schema/coinDetails";
import {CoinTickerSchema} from "../api/schema/coinTicker";
import {getCoinDetails, getCoinTickers} from "../api/coin";

interface RouteParams {
  coinId: string;
}

const Coin = () => {
  const {coinId} = useParams<RouteParams>();
  const {isLoading: infoLoading, data: infoData} = useQuery<CoinDetailsSchema>(
    ["details", coinId],
    () => getCoinDetails(coinId)
  );
  const {isLoading: tickersLoading, data: tickersData} = useQuery<CoinTickerSchema>(
    ["tickers", coinId],
    () => getCoinTickers(coinId)
  );
  const loading = infoLoading || tickersLoading;
  return (
    <>
      {loading
        ? (<span>Loading...</span>)
        : (<>
          <div>
            <span>Rank:</span>
            <span>{infoData?.rank}</span>
          </div>
          <div>
            <span>Symbol:</span>
            <span>${infoData?.symbol}</span>
          </div>
          <div>
            <span>Price:</span>
            <span>${tickersData?.quotes.USD.price.toFixed(1)}</span>
          </div>
          <div>
            <p>{infoData?.description}</p>
          </div>
        </>)
      }
    </>
  );
}

export default Coin;