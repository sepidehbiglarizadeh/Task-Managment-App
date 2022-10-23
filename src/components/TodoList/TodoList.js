import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css";

const TodoList = ({ todos }) => {
  return (
    <section className={styles.todoList}>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
    </section>
  );
};

export default TodoList;
