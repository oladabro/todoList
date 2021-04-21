import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  todoListState,
  doneTasksBtnState,
  filteredTasksState,
  searchTermState,
  todoListForSearch,
} from '../shared/globalState';
import TodoItem from './TodoItem';
import CreateTodoItem from './CreateTodoItem';
import { url } from '../shared/utils';
import TodoStats from './TodoStats/TodoStats';
import SearchBar from './SearchBar';
import Header from './Header/Header';
import { AppContainerStyle } from '../shared/AppContainerStyle';

export default function TodoList() {
  const setTodoList = useSetRecoilState(todoListState);
  const [btnState, setBtnState] = useRecoilState(doneTasksBtnState);
  const todoList = useRecoilValue(filteredTasksState);
  // const todoListForSearch = useRecoilValue(todoListForSearch);
  // const searchTerm = useRecoilValue(todoListForSearch);
  const searchTerm = useRecoilValue(searchTermState);

  const todoListForSearch = todoList.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(url);
      const data = await response.data;
      setTodoList(data);
    };

    fetchData();
  }, []);

  return (
    <AppContainerStyle>
      <Header />
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
          {todoListForSearch.map((task) => {
            return <TodoItem key={task.id} task={task} />;
          })}
        </ul>
      </section>
    </AppContainerStyle>
  );
}
