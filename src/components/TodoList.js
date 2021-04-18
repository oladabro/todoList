import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  todoListState,
  doneTasksBtnState,
  filteredTasksState,
} from '../shared/globalState';
import TodoItem from './TodoItem';
import CreateTodoItem from './CreateTodoItem';
import { url } from '../shared/utils';
import TodoStats from './TodoStats';
import SearchBar from './SearchBar';

export default function TodoList() {
  const setTodoList = useSetRecoilState(todoListState);
  const [btnState, setBtnState] = useRecoilState(doneTasksBtnState);
  const todoList = useRecoilValue(filteredTasksState);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(url);
      const data = await response.data;
      setTodoList(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <TodoStats />

      <CreateTodoItem />
      <SearchBar />
      <section>
        {btnState ? (
          <button onClick={() => setBtnState(!btnState)}>Show all tasks</button>
        ) : (
          <button onClick={() => setBtnState(!btnState)}>
            Hide finished tasks
          </button>
        )}
        <ul>
          {todoList.map((task) => {
            return <TodoItem key={task.id} task={task} />;
          })}
        </ul>
      </section>
    </>
  );
}
