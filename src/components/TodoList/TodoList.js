import { useState } from "react";
import Todo from "../Todo/Todo";
import TodoForm from "../TodoForm/TodoForm";
import styles from "./TodoList.module.css";

const TodoList = ({ todos, onDelete,onUpdateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    text: "",
    isCompleted: false,
    date: "",
  });

  const editTodoHandler=(newInputValue)=>{
    onUpdateTodo(edit.id,newInputValue);
    setEdit({id:null,isCompleted:false})

  }

  const renderTodos = () => {
    if (todos.length === 0) return <h2 className={styles.text}>Add Some Todos</h2>;

    return (
      <>
        {todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              onDelete={() => onDelete(todo.id)}
              onEdit={() => setEdit(todo)}
            />
          );
        })}
      </>
    );
  };

  return <section className={styles.todoList}>{edit.id ? <TodoForm submitTodoHandler={editTodoHandler} edit={edit}/> : renderTodos()}</section>;
};

export default TodoList;
