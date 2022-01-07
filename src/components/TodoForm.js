import { useState } from "react";
import Button from "./UI/Button";
import "./TodoForm.css";

const TodoForm = (props) => {
  const [todo, setTodo] = useState('');

  const todoChangeHandler = (event) => {
    setTodo(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const newTodo = { whatodo: todo }

    setTodo('');
    props.onSubmitTodo(newTodo);
  }

    return (
    <div className="todo-form">
      <form onSubmit={submitHandler}>
        <div className="todo-form-input">
          <input type="text" name="todo" placeholder="add todo.." onChange={todoChangeHandler}/>
        </div>
        <Button title="Add todo" />
      </form>
    </div>
  );
};

export default TodoForm;
