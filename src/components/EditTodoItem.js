import React from 'react';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { todoListState } from '../shared/globalState';
import axios from 'axios';
import { url, updateArrayAtIndex } from '../shared/utils';

export default function EditTodoItem() {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const [inputValue, setInputValue] = useState('');

  const history = useHistory();
  const { id } = useParams();

  // const resolveResponse = (resp) => {
  //   if (resp.ok) {
  //     return resp.json();
  //   }
  //   throw new Error('błąd połaczenia');
  // };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:8000/tasks/${id}`);
      const data = await response.data;
      console.log(data);
      setInputValue(data.name);
    };
    fetchData();
  }, []);
  console.log(inputValue);

  const saveItem = (id) => {
    axios
      .patch(`${url}/${id}`, {
        name: inputValue,
      })
      .then(
        (response) => {
          const newArray = updateArrayAtIndex(todoList, id, response.data);
          setTodoList([...newArray]);
        },
        (error) => {
          console.log(error);
        }
      );

    goHome();
  };

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const goHome = () => {
    history.push('/');
  };

  return (
    <div>
      <input type='text' value={inputValue} onChange={handleInputValue} />
      <button onClick={(e) => saveItem(id)}>Save</button>
    </div>
  );
}
