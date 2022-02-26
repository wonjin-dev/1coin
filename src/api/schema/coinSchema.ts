export interface CoinChartSchema {
  open: number;
  close: number;
  time_close: string;
  high: number;
  low: number;
}

export interface CoinDetailsSchema {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  description: string;
}

export interface CoinListSchema {
  id: string;
  name: string;
  symbol: string;
}

export interface CoinTickerSchema {
  quotes: {
    USD: {
      price: number;
    };
  };
}