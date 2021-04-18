import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { todoListState, inputTextState } from '../shared/globalState';
import { url, maxInputLength, minInputLength } from '../shared/utils';

export default function CreateTodoItem() {
  const [inputValue, setInputValue] = useState('');
  // const [todoList, setTodoList] = useRecoilState(todoListState);
  const setTodoList = useSetRecoilState(todoListState);
  const [inputLength, setInputLength] = useRecoilState(inputTextState);

  const onChange = (e) => {
    setInputValue(e.target.value);
    setInputLength(e.target.value.length);
  };

  const addItem = (event) => {
    event.preventDefault();

    axios
      .post(url, {
        name: inputValue,
        isDone: false,
      })
      .then((resp) => {
        setTodoList((prevTodoList) => [...prevTodoList, resp.data]);
        setInputValue('');
        setInputLength(0);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <form onSubmit={addItem}>
      <input
        type='text'
        name='name'
        value={inputValue}
        minLength={minInputLength}
        maxLength={maxInputLength}
        onChange={onChange}
        placeholder='Type in your task...'
        required
      />
      <small>
        {inputLength}/{maxInputLength}
      </small>
      <button>Add</button>
    </form>
  );
}
