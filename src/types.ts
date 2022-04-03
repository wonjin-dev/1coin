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
  isStared?: boolean;
}

export interface ChartProps {
  coinId?: string;
}

export type CoinPageRouteParams = {
  coinId: string;
}

export interface InputProps {
  type?: string
  name: string;
  value?: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface BtnProps{
  value?: string;
  onClick?: () => void;
}