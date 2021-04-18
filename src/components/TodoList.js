import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { todoListState } from '../shared/globalState';
import TodoItem from './TodoItem';
import { useParams, useHistory } from 'react-router-dom';
import CreateTodoItem from './CreateTodoItem';
import { url } from '../shared/utils';

export default function TodoList() {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(url);
      const data = await response.data;
      setTodoList(data);
    };

    fetchData();
  }, []);
  console.log(todoList);
  return (
    <>
      <section>
        <CreateTodoItem />
      </section>
      <ul>
        {todoList.map((task) => {
          return <TodoItem key={task.id} task={task} />;
        })}
      </ul>
    </>
  );
}
