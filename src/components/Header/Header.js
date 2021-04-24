import React from 'react';
import { name } from '../../shared/utils';
import { HeaderStyle } from './HeaderStyle';

export default function Header() {
  const date = new Date().toDateString().slice(0, -5);

  return (
    <HeaderStyle>
      <h1>Hi {name}</h1>
      {/* <img
        src={require(`../../images/tasks1.jpg`).default}
        alt='tasks_photo'
        height='150px'
      /> */}
      <h3>{`It's ${date},`}</h3>
      <h3>{`let see what's on your todo list for today`}</h3>
    </HeaderStyle>
  );
}
