import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { todoListState } from '../shared/globalState';
import { url, updateArrayAtIndex, removeArrayAtIndex } from '../shared/utils';

export default function TodoItem({ task }) {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const deleteItem = (id) => {
    axios.delete(`${url}/${id}`).then(() => {
      const updatedList = removeArrayAtIndex(todoList, id);
      setTodoList(updatedList);
    });
  };

  const toggleIsDone = () => {
    const newArray = updateArrayAtIndex(todoList, task.id, {
      id: task.id,
      name: task.name,
      isDone: !task.isDone,
    });

    setTodoList([...newArray]);
  };

  return (
    <>
      <li>
        <div>
          <span>{task.name}</span>
          <input
            type='checkbox'
            checked={task.isDone}
            onChange={toggleIsDone}
          />

          <button onClick={(e) => deleteItem(task.id)}>X</button>
          <Link to={`/${task.id}`}>Edit</Link>
        </div>
      </li>
    </>
  );
}
