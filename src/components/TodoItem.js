import './TodoItem.css'

const TodoItem = props => {

    const clickHandler = () => {
        props.onDelete(props.id)
    }

    return(
        <li className="todo-item" onClick={clickHandler}>
            <p>{props.whatodo}</p>
        </li>
    )
}

export default TodoItem;