import './App.css';
import TodoList from './components/TodoList';
import { RecoilRoot } from 'recoil';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <RecoilRoot>
      <TodoList />
    </RecoilRoot>
  );
}

export default App;
