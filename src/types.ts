export interface LandingPageProps {
  title: string;
}

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