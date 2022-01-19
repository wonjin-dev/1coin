import axios from "axios";

export const getCoinList = async() => {
  let url = 'https://api.coinpaprika.com/v1/coins';
  let {data} = await axios.get(url);
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