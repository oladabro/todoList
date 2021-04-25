import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  todoListState,
  filteredTasksState,
  searchTermState,
} from '../state/globalState';
import TodoItem from '../components/TodoItem/TodoItem';
import CreateTodoItem from './CreateTodoItem/CreateTodoItem';
import { url } from '../shared/utils';
import TodoStats from './TodoStats/TodoStats';
import SearchBar from './SearchBar';
import Header from './Header/Header';
import { AppContainerStyle } from '../shared/AppContainerStyle';
import ShowHideTasksBtn from './ShowHideTasksBtn';
import { TasksListStyle } from './TasksListStyle';
import { TodoItemStyle } from '../components/TodoItem/TodoItemStyle';
import { SearchSectionStyle } from './SearchSectionStyle';
import { RightContainerStyle } from './RigthContainerStyle';
import { LeftContainerStyle } from './LeftContainerStyle';

// ----------------------------------------

export default function TodoList() {
  const setTodoList = useSetRecoilState(todoListState);

  const todoList = useRecoilValue(filteredTasksState);
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
      <SearchSectionStyle>
        <SearchBar />
        <ShowHideTasksBtn />
      </SearchSectionStyle>
      <TasksListStyle>
        {todoListForSearch.map((task) => {
          return <TodoItem key={task.id} task={task} />;
        })}
      </TasksListStyle>
      {/* </RightContainerStyle> */}
    </AppContainerStyle>
  );
}
