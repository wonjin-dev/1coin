export type LoaderType = 'spin' | 'page';
export interface LoaderProps {
  type: LoaderType;
  text?: string;
  img?: string;
}

export interface CoinCardProps {
  coinId: string;
  coinName: string;
  coinSymbol: string;
}

export interface ChartProps {
  coinId: string;
}

export interface CoinPageRouteParams {
  coinId: string;
}

export interface InputProps {
  type?: string
  name: string;
  value?: string | number;
  onChange: () => void;
}

export type userType = {
  id?: string,
  pw?: string
}