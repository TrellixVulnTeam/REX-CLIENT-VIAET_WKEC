import { useState } from 'react';
import './App.css';
import TodoForm from './Components/TodoForm/TodoForm';
import TodoList from './Components/TodoList/TodoList';

function App() {
  const staticTodos = [
    {id:1, todoName: "todo-1"},
    {id:2, todoName: "todo-2"},
    {id:3, todoName: "todo-3"}
  ];
  const [todos,setTodos] = useState(staticTodos);
  return (
    <div className='App'>
      <TodoForm />
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
