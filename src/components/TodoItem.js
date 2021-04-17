import React from 'react';

export default function TodoItem({ task }) {
  return (
    <>
      <li>
        <div>
          <span>{task.name}</span>
          <button>Done</button>
          <button>Delete</button>
          <button>Edit</button>
        </div>
      </li>
    </>
  );
}
