import React from 'react';
import { useRecoilState } from 'recoil';
import { searchTermState } from '../state/globalState';

export default function SearchBar() {
  const [inputValue, setInputValue] = useRecoilState(searchTermState);

  return (
    <form>
      <input
        type='search'
        placeholder='Search...'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </form>
  );
}
