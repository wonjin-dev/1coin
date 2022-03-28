import {atom} from 'recoil';
import {userType} from './types';

const initState: userType[] = [];

export const darkModeAtom = atom({
  key: 'isDark',
  default: true
});

export const userAtom = atom({
  key: 'userInfo',
  default: initState
});

export const authAtom = atom({
  key: 'auth',
  default: false
});