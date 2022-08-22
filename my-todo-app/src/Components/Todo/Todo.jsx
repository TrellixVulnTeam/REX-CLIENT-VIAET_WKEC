import React from 'react';
import './todo.css';

const Todo = ({todo}) => {
  return (
    <div>{todo.todoName}</div>
  )
}

export default Todo