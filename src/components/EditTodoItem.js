import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { Link } from 'react-router-dom';
import { todoListState } from '../globalState/globalState';

export default function EditTodoItem() {
  const { id } = useParams();
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const editItem = todoList.filter((item) => item.id == id);

  const history = useHistory();

  const handleHistory = () => {
    history.push('/');
  };

  return (
    <div>
      <input type='text' value={editItem[0].name} />
      <button>Save</button>
      <button>Delete</button>
      <button onClick={handleHistory}>Go back</button>
    </div>
  );
}
