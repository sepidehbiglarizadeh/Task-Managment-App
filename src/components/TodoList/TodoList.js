import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Todo from "../Todo/Todo";
import TodoForm from "../TodoForm/TodoForm";
import styles from "./TodoList.module.css";

const TodoList = ({ todos, onDelete, onUpdateTodo, onCompleted, onFilter }) => {
  const [edit, setEdit] = useState({
    id: null,
    text: "",
    isCompleted: false,
    date: "",
  });

  const editTodoHandler = (newInputValue) => {
    onUpdateTodo(edit.id, newInputValue);
    setEdit({ id: null, isCompleted: false });
  };

  const renderTodos = () => {
    if (todos.length === 0)
      return <h2 className={styles.text}>Add Some Todos</h2>;

    return (
      <>
        {todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              onDelete={() => onDelete(todo.id)}
              onEdit={() => setEdit(todo)}
              onCompleted={() => onCompleted(todo.id)}
            />
          );
        })}
      </>
    );
  };

  return (
    <section className={styles.todoList}>
      {edit.id ? (
        <TodoForm submitTodoHandler={editTodoHandler} edit={edit} />
      ) : (
        renderTodos()
      )}
      <Navbar onFilter={onFilter} />
    </section>
  );
};

export default TodoList;
