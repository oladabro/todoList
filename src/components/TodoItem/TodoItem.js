import React from 'react';
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { todoListState } from '../../state/globalState';
import {
  url,
  updateArrayAtIndex,
  removeArrayAtIndex,
} from '../../shared/utils';
import { TodoItemStyle } from './TodoItemStyle';
import { FaRegTrashAlt, FaRegEdit } from 'react-icons/fa';

// ------------------------------------------------------

export default function TodoItem({ task }) {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const deleteItem = (id) => {
    axios
      .delete(`${url}/${id}`)
      .then(() => {
        const updatedList = removeArrayAtIndex(todoList, id);
        setTodoList(updatedList);
      })
      .catch((err) => console.error(err));
  };

  const toggleIsDone = () => {
    axios
      .patch(`${url}/${task.id}`, {
        isDone: !task.isDone,
      })
      .then((resp) => {
        const newArray = updateArrayAtIndex(todoList, task.id, resp.data);
        setTodoList([...newArray]);
      });
  };

  return (
    <>
      <TodoItemStyle color={task.priority}>
        <div>
          <p>{task.priority} Priority</p>
          <span>{task.name}</span>
        </div>
        <div>
          <div>
            <input
              type='checkbox'
              checked={task.isDone}
              onChange={toggleIsDone}
            />
          </div>
          <Link to={`/${task.id}`}>
            <FaRegEdit />
          </Link>
          <button onClick={(e) => deleteItem(task.id)}>
            <FaRegTrashAlt />
          </button>
        </div>
      </TodoItemStyle>
    </>
  );
}
