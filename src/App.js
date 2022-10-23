import "./App.css"
import Header from "./components/Header/Header";
import TodoForm from "./components/TodoForm/TodoForm";

function App() {
  return (
    <main>
      <Header />
      <section className="appContent">
        <TodoForm/>
      </section>
    </main>
  );
}

export default App;
