import './App.css';
import TodoList from './components/TodoList';
import EditTodoItem from './components/EditTodoItem';
import { RecoilRoot } from 'recoil';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams,
} from 'react-router-dom';

function App() {
  return (
    <RecoilRoot>
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
