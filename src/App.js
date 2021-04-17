import './App.css';
import TodoList from './components/TodoList';
import EditTodoItem from './components/EditTodoItem';
import { RecoilRoot } from 'recoil';
import {
  HashRouter as Router,
  Route,
  Switch,
  useHistory,
} from 'react-router-dom';

function App() {
  const history = useHistory();
  console.log(history);
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
