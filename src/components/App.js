import TodoList from './TodoList';
import EditTodoItem from './EditTodoItem/EditTodoItem';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GlobalStyle } from '../shared/globalStyle';

function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path='/'>
            <TodoList />
          </Route>
          <Route path='/:id'>
            <EditTodoItem />
          </Route>
        </Switch>
      </Router>
    </RecoilRoot>
  );
}

export default App;
