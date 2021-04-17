import React from 'react';
import { Link } from 'react-router-dom';

export default function TodoItem({ task }) {
  return (
    <>
      <li>
        <div>
          <span>{task.name}</span>
          <button>Done</button>
          <button>Delete</button>
          <Link to={`/${task.id}`}>Edit</Link>
        </div>
      </li>
    </>
  );
}
