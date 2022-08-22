import Todo from '../Todo/Todo'
import './todoList.css'

const TodoList = ({todos}) => {
    const renderTodos=()=>{
        return todos.map((todo)=>{
            return <Todo key={todo.id} todo={todo}/>
        });
    };
  return (
    <div>{renderTodos()}</div>
  )
}

export default TodoList