import {atom} from 'recoil';
import {StaredCoin} from './types';

export const darkModeAtom = atom({
  key: 'isDark',
  default: true
});

const initialStateStaredCoin: StaredCoin[] = [];

export const staredCoinAtom = atom({
  key: 'isStar',
  default: initialStateStaredCoin
});