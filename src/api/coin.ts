import axios from "axios";

export const getCoinList = async() => {
  let url = 'https://api.coinpaprika.com/v1/coins';
  let {data} = await axios.get(url);
  return data;
}