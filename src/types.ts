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
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export type userType = {
  email?: string,
  id?: string,
  pw?: string
}

export interface BtntProps{
  value?: string;
  onClick?: () => void;
}