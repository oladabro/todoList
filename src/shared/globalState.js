import { atom } from 'recoil';

export const todoListState = atom({
  key: 'todoListState',
  default: [],
});

export const inputTextState = atom({
  key: 'inputTextState',
  default: 0,
});
