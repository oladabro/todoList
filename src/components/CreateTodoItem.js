import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { newItemState } from '../shared/globalState';
import { todoListState } from '../shared/globalState';
import { url } from '../shared/utils';

export default function CreateTodoItem() {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useRecoilState(todoListState);

  // const setTodoList = useSetRecoilState(todoListState);

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  const addItem = (event) => {
    event.preventDefault();

    axios
      .post(url, {
        name: inputValue,
        isDone: false,
      })
      .then(
        (response) => {
          setTodoList((prevTodoList) => [...prevTodoList, response.data]);
          setInputValue('');
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <form onSubmit={addItem}>
      <input type='text' name='name' value={inputValue} onChange={onChange} />
      <button>Add</button>
    </form>
  );
}
