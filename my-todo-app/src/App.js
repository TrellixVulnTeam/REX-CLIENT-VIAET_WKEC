import React from 'react';
import { useState } from 'react';
import './App.css';
import TodoForm from './Components/TodoForm/TodoForm';
import TodoList from './Components/TodoList/TodoList';

function App() {
  // const staticTodos = [
  //   { id: 1, todoName: "todo-1" },
  //   { id: 2, todoName: "todo-2" },
  //   { id: 3, todoName: "todo-3" }
  // ];
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const handleInputChage = (e) => {
    setTodos(e.target.value);
  };
  const handleInputSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };
  return (
    <div className='app-container'>
      <TodoForm
        id="todo-add"
        type="text"
        btnText="Add"
        value={todo}
        onChange={handleInputChage}
        onSubmit={handleInputSubmit} 
      />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
