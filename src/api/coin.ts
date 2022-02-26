import axios from 'axios';

export const getCoinList = async(startIndex: number) => {
  const url = 'https://api.coinpaprika.com/v1/coins';
  let {data} = await axios.get(url);
  data = data.slice(startIndex, startIndex + 10);
  return data;
}

export const getCoinDetails = async(coinId: string) => {
  const url = `https://api.coinpaprika.com/v1/coins/${coinId}`;
  const {data} = await axios.get(url);
  return data;
}

export const getCoinTickers = async(coinId: string) => {
  const url = `https://api.coinpaprika.com/v1/tickers/${coinId}`;
  const {data} = await axios.get(url);
  return data;
}

export const getCoinChartData = async(coinId: string) => {
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - 60 * 60 * 24 * 7 * 4;
  const url = `https://api.coinpaprika.com/v1/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`;
  const {data} = await axios.get(url);
  return data;
}