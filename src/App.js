import { useState } from 'react';
import './App.css';
import TodoAdder from './components/TodoAdder';
import TodoList from './components/TodoList';

let initialTodos = [
  {id: 't1', whatodo: 'learning react'},
  {id: 't2', whatodo: 'learning elasticsearch'}
]

function App() {
  const [todos, setTodos] = useState(initialTodos)

  const addTodoHandler = (newTodo) => {
    setTodos(prevState => [newTodo, ...prevState])
  }

  const deleteTodoHandler = (id) => {
    const filteredTodos = todos.filter(todo => todo.id !== id)
    setTodos(filteredTodos)
  }

  return (
    <div className="App">
      <TodoAdder onAddTodo={addTodoHandler} />
      <br></br>
      <TodoList todos={todos} onDeleteTodo={deleteTodoHandler} />
    </div>
  );
}

export default App;
