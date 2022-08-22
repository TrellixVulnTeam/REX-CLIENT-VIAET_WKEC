import './todoForm.css';
import { FaPlus } from "react-icons/fa";
import { FaSave } from 'react-icons/fa';

const TodoForm = (id, type, btnText, value, onChange, onSubmit) => {
  return (
    <form id={`${id}-form`} onSubmit={(e) => onSubmit}>
      <div>
        <input id={`${id}-input`}
          type={type}
          value={value}
          onChange={(e) => onChange}
          required />
        <span className='highlight'></span>
        <span className="bar"></span>
        <label className="todoForm-label" htmlFor="1">
          {id === "todo-add" ? "Todo:" : ""}
        </label>
      </div>
      <button id={`${id}-btn`} className="form-submit-btn" type="submit">
        {btnText === "Add" ? (
          <FaPlus className="btn-icon-add" />
        ) : (
          <FaSave className="btn-icon-save" />
        )}
      </button>
    </form>
  )
}

export default TodoForm