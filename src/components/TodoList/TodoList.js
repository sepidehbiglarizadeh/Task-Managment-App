import Todo from "../Todo/Todo";


const TodoList = ({ todos }) => {
  return todos.map((todo) => {
    return <Todo key={todo.id} todo={todo}/>;
  });
};

export default TodoList;
