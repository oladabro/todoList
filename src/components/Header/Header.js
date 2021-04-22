import React from 'react';

import { HeaderStyle } from './HeaderStyle';

export default function Header() {
  const date = new Date().toDateString().slice(0, -5);

  return (
    <HeaderStyle>
      <h3>{`It's ${date},`}</h3>
      <h3>{`let see what's on your todo list for today`}</h3>
    </HeaderStyle>
  );
}
