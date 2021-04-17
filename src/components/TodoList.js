import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { todoListState } from '../globalState/globalState';
import TodoItem from './TodoItem';

export default function TodoList() {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:8000/tasks');
      const data = await response.data;
      setTodoList(data);
    };
    fetchData();
  }, []);

  return (
    <ul>
      {todoList.map((task) => {
        return <TodoItem key={task.id} task={task} />;
      })}
    </ul>
  );
}
