import React from 'react';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { todoListState, inputTextState } from '../../state/globalState';
import axios from 'axios';
import { url, updateArrayAtIndex, maxInputLength } from '../../shared/utils';
import { Button, EditTodoItemStyle } from './EditToDoItemStyle';

export default function EditTodoItem() {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const [inputValue, setInputValue] = useState('');
  const [priorityValue, setPriorityValue] = useState('');
  const [inputLength, setInputLength] = useRecoilState(inputTextState);

  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:8000/tasks/${id}`);
      const data = await response.data;
      setInputValue(data.name);
      setPriorityValue(data.priority);
      setInputLength(data.name.length);
    };
    fetchData();
  }, [id]);

  const saveItem = (id) => {
    console.log(id);
    axios
      .patch(`${url}/${id}`, {
        name: inputValue,
        priority: priorityValue,
      })
      .then(
        (response) => {
          const newArray = updateArrayAtIndex(todoList, id, response.data);
          setTodoList([...newArray]);
          setInputLength(0);
        },
        (error) => {
          console.log(error);
        }
      );

    goHome();
  };

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
    setInputLength(e.target.value.length);
  };

  const goHome = () => {
    history.push('/');
  };

  return (
    <EditTodoItemStyle>
      <main>
        <div>
          <textarea
            rows='4'
            type='text'
            name='name'
            placeholder='Type in your task...'
            value={inputValue}
            onChange={handleInputValue}
            maxLength={maxInputLength}
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
        </div>

        <Button padding='10px 15px' onClick={(e) => saveItem(id)}>
          Save
        </Button>
      </main>
    </EditTodoItemStyle>
  );
}
