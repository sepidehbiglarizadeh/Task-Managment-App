import styles from "./Header.module.css";
import logo from "../../assets/images/logo.png";
import { FaRegListAlt } from "react-icons/fa";

const Header = () => {
  return (
    <header className={styles.header}>
        <div className={styles.content}>
          <div className={styles.imgContainer}>
            <img src={logo} alt="logo" />
          </div>
          <CountTasks/>
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

const CountTasks = () => {
  return (
    <div className={styles.countTasksContainer}>
      <div className={styles.countTasks}>
        <span>0</span>
        <span>All Tasks</span>
      </div>
      <div>
        <span>0</span>
        <span>Completed</span>
      </div>
      <div>
        <span>0</span>
        <span>UnCompleted</span>
      </div>
    </div>
  );
};
