import {atom} from 'recoil';

export const darkModeAtom = atom({
  key: 'isDartk',
  default: true
});

export const loginAtom = atom({
  key: 'isLoggedIn',
  default: false
});