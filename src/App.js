import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const addNewTodoHandler = (inputValue) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: inputValue,
      isCompleted: false,
      date: new Date().toLocaleString(),
    };
    setTodos([...todos, newTodo]);
  };

  const updateTodoHandler = (id, newInputValue) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.text = newInputValue;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };

  const deleteTodoHandler = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <main>
      <Header />
      <section className="appContent">
        <TodoForm submitTodoHandler={addNewTodoHandler} />
        <TodoList todos={todos} onDelete={deleteTodoHandler} onUpdateTodo={updateTodoHandler}/>
      </section>
    </main>
  );
}

export default App;
