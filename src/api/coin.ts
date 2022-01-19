import axios from "axios";

export const getCoinList = async() => {
  let url = 'https://api.coinpaprika.com/v1/coins';
  let {data} = await axios.get(url);
  data= data.slice(0,100)
  return data;
}

export const getCoinDetails = async(coinId: string) => {
  let url = `https://api.coinpaprika.com/v1/coins/${coinId}`;
  let {data} = await axios.get(url);
  return data;
}

export const getCoinTickers = async(coinId: string) => {
  let url = `https://api.coinpaprika.com/v1/tickers/${coinId}`;
  let {data} = await axios.get(url);
  return data;
}

export const getCoinChartData = async(coinId: string) => {
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - 60 * 60 * 24 * 7 * 4;
  let url = `https://api.coinpaprika.com/v1/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`;
  let {data} = await axios.get(url);
  return data;
}