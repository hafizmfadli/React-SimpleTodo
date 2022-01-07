import Card from "./UI/Card";
import TodoForm from "./TodoForm";

const TodoAdder = (props) => {

  const submitTodoHandler = (submittedTodo) => {
    const todo = {
      id: (parseInt(Math.random() * 10)).toString(),
      ...submittedTodo
    }

    props.onAddTodo(todo);
  }

    return (
    <Card title="My Todo List">
      <TodoForm onSubmitTodo={submitTodoHandler} />
    </Card>
  );
};

export default TodoAdder;
