import { atom } from 'recoil';

export const todoListState = atom({
  key: 'todoListState',
  default: [],
});

export const newItemState = atom({
  key: 'newItemState',
  default: '',
});
