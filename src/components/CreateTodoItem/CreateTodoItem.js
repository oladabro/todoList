import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { todoListState, inputTextState } from '../../state/globalState';
import { url, maxInputLength, minInputLength } from '../../shared/utils';
import { CreateTodoItemStyle } from './CreateTodoItemStyle';

// -----------------------------------------------

export default function CreateTodoItem() {
  const [priorityValue, setPriorityValue] = useState('Low');
  const [inputValue, setInputValue] = useState('');

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
        priority: priorityValue,
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
    <CreateTodoItemStyle onSubmit={addItem}>
      <div>
        <textarea
          rows='3'
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
      </div>

      <div>
        <label htmlFor='priority'>Set priority</label>
        <select
          name='priority'
          id='priority'
          value={priorityValue}
          onChange={(e) => setPriorityValue(e.target.value)}
        >
          <option value='Low'>Low</option>
          <option value='Medium'>Medium</option>
          <option value='High'>High</option>
        </select>

        <button>Add task</button>
      </div>
    </CreateTodoItemStyle>
  );
}
