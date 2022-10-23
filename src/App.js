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

  return (
    <main>
      <Header />
      <section className="appContent">
        <TodoForm submitTodoHandler={addNewTodoHandler} />
        <TodoList todos={todos} />
      </section>
    </main>
  );
}

export default App;
