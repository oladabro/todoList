import React from 'react';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { todoListState, inputTextState } from '../../state/globalState';
import axios from 'axios';
import { url, updateArrayAtIndex, maxInputLength } from '../../shared/utils';
import { Button } from './EditToDoItemStyle';

export default function EditTodoItem() {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const [inputValue, setInputValue] = useState('');
  const [inputLength, setInputLength] = useRecoilState(inputTextState);

  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:8000/tasks/${id}`);
      const data = await response.data;
      setInputValue(data.name);
      setInputLength(data.name.length);
    };
    fetchData();
  }, [id]);

  const saveItem = (id) => {
    console.log(id);
    axios
      .patch(`${url}/${id}`, {
        name: inputValue,
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
    <div>
      <input
        type='text'
        value={inputValue}
        onChange={handleInputValue}
        maxLength={maxInputLength}
      />

      <small>
        {inputLength}/{maxInputLength}
      </small>

      <Button padding='10px 15px' onClick={(e) => saveItem(id)}>
        Save
      </Button>
    </div>
  );
}
