import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { colors } from "../../colors";
import styles from "./Todo.module.css";

const Todo = ({ todo }) => {
  const item = colors[Math.floor(Math.random() * colors.length)];

  return (
    <div
      className={styles.todo}
      style={{ background: item.gradiant, borderLeftColor: item.color }}
    >
      <div className={styles.date}>{todo.date}</div>
      <div className={styles.desc}>
        <p>{todo.text}</p>
        <label className={styles.container}>
          <input type="checkbox" />
          <span className={styles.checkmark}></span>
        </label>
      </div>
      <div className={styles.btnsWrapper}>
        <button className={styles.edit}>
          <FaEdit />
        </button>
        <button className={styles.delete}>
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default Todo;
