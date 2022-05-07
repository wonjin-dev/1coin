import {atom} from 'recoil';
import {CoinCardProps} from '../types/props';

export const darkModeAtom = atom({
  key: 'isDark',
  default: true
});

const initialStateStaredCoin: CoinCardProps[] = [];

export const staredCoinAtom = atom({
  key: 'isStar',
  default: initialStateStaredCoin
});