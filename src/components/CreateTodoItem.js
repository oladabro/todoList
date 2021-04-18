import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { todoListState, inputTextState } from '../shared/globalState';
import { url, maxInputLength } from '../shared/utils';
import { useHistory } from 'react-router-dom';

export default function CreateTodoItem() {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useRecoilState(todoListState);
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
        maxlength='50'
        onChange={onChange}
      />
      <small>
        {inputLength}/{maxInputLength}
      </small>
      <button>Add</button>
    </form>
  );
}
