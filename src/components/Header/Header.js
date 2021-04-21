import React from 'react';
import { name } from '../../shared/utils';
import { HeaderStyle } from './HeaderStyle';

export default function Header() {
  const date = new Date().toDateString();
  return (
    <HeaderStyle>
      <h1>Hi {name}</h1>
      <h3>{`It's ${date},\nlet see what's on your todo list for today`}</h3>
    </HeaderStyle>
  );
}
