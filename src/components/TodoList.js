import TodoItem from "./TodoItem";
import './TodoList.css'
const TodoList = (props) => {
     
    if(props.todos.length === 0){
        return <p>No todo today, want make one ?</p>
    }

    return (
        <div className="todo-list">
            <ul>
             {props.todos.map(todo => (
                 <TodoItem 
                    whatodo={todo.whatodo}
                    key={todo.id}
                    onDelete={props.onDeleteTodo}
                    id={todo.id}
                 />
             ))}
            </ul>
        </div>
    )
}

export default TodoList;