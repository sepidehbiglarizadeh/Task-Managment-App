import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    if (todos.length) localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(savedTodos);
    setFilteredTodos(savedTodos);
  }, []);

  const addNewTodoHandler = (inputValue) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: inputValue,
      isCompleted: false,
      date: new Date().toLocaleString(),
    };
    setTodos([...todos, newTodo]);
    setFilteredTodos([...filteredTodos, newTodo]);
  };

  const updateTodoHandler = (id, newInputValue) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.text = newInputValue;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
    setFilteredTodos(updatedTodos);
  };

  const deleteTodoHandler = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
    setFilteredTodos(filteredTodos);
    localStorage.removeItem("todos");
  };

  const completedHandler = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.isCompleted = !selectedTodo.isCompleted;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
    setFilteredTodos(updatedTodos);
  };

  const filtereTodosHandler = (value) => {
    switch (value) {
      case "completed":
        setFilteredTodos(todos.filter((t) => t.isCompleted));
        break;
      case "unCompleted":
        setFilteredTodos(todos.filter((t) => !t.isCompleted));
        break;
      default:
        return setFilteredTodos(todos);
    }
  };

  return (
    <main className="app">
      <Header todos={todos} />
      <section className="appContent">
        <TodoForm submitTodoHandler={addNewTodoHandler} />
        <TodoList
          todos={filteredTodos}
          onDelete={deleteTodoHandler}
          onUpdateTodo={updateTodoHandler}
          onCompleted={completedHandler}
          onFilter={filtereTodosHandler}
        />
      </section>
    </main>
  );
}

export default App;
