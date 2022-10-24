import styles from "./Header.module.css";
import logo from "../../assets/images/logo.png";

const Header = ({todos}) => {
  return (
    <header className={styles.header}>
        <div className={styles.content}>
          <div className={styles.imgContainer}>
            <img src={logo} alt="logo" />
          </div>
          <CountTasks todos={todos}/>
        </div>
        <div className={styles.text}>
          <h1>
            Plan your day with
            <br />
            task managment app
          </h1>
        </div>
    </header>
  );
};

export default Header;

const CountTasks = ({todos}) => {
  return (
    <div className={styles.countTasksContainer}>
      <div className={styles.countTasks}>
        <span>{todos.length}</span>
        <span>All Tasks</span>
      </div>
      <div className={styles.countTasks}>
        <span>{todos.filter((todo)=> todo.isCompleted).length}</span>
        <span>Completed</span>
      </div>
      <div className={styles.countTasks}>
        <span>{todos.filter((todo)=> !todo.isCompleted).length}</span>
        <span>UnCompleted</span>
      </div>
    </div>
  );
};
