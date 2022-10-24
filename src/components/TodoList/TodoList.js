import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css";

const TodoList = ({ todos, onDelete }) => {
  return (
    <section className={styles.todoList}>
      {todos.map((todo) => {
        return (
          <Todo key={todo.id} todo={todo} onDelete={() => onDelete(todo.id)} />
        );
      })}
    </section>
  );
};

export default TodoList;
