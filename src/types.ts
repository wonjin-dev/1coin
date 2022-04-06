export type LoaderType = 'spin' | 'page';
export interface LoaderProps {
  type: LoaderType;
  text?: string;
  img?: string;
};

export interface CoinCardProps {
  coinId: string;
  coinName: string;
  coinSymbol: string;
  isStared?: boolean;
};

export interface ChartProps {
  coinId?: string;
};

export type CoinPageRouteParams = {
  coinId: string;
};

export interface InputProps {
  type?: string
  name: string;
  value?: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export interface BtnProps{
  value?: string;
  onClick?: () => void;
};

export interface CoinChartSchema {
  open: number;
  close: number;
  time_close: string;
  high: number;
  low: number;
};

export interface CoinDetailsSchema {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  description: string;
};

export interface CoinListSchema {
  id: string;
  name: string;
  symbol: string;
};

export interface CoinTickerSchema {
  quotes: {
    USD: {
      price: number;
    };
  };
};