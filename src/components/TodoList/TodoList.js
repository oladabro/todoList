import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  todoListState,
  filteredTasksState,
  searchTermState,
} from '../../state/globalState';
import TodoItem from '../TodoItem/TodoItem';
import CreateTodoItem from '../CreateTodoItem/CreateTodoItem';
import { url } from '../../shared/utils';
import TodoStats from '../TodoStats/TodoStats';
import SearchBar from '../SearchBar/SearchBar';
import Header from '../Header/Header';
import { AppContainerStyle } from '../App/AppContainerStyle';
import ShowHideTasksBtn from '../ShowHideTasksBtn/ShowHideTasksBtn';
import { TasksListStyle } from '../TasksListStyle/TasksListStyle';
import { SearchSectionStyle } from '../SearchSectionStyle/SearchSectionStyle';
import Motivation from '../Motivation/Motivation';

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
      {/* <Motivation /> */}
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
