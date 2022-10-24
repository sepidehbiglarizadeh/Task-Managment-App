import { FaEdit, FaTrashAlt, FaCheck } from "react-icons/fa";
import { colors } from "../../colors";
import styles from "./Todo.module.css";

const Todo = ({ todo, onDelete, onEdit, onCompleted }) => {
  const item = colors[Math.floor(Math.random() * colors.length)];

  return (
    <div
      className={`${styles.todo} ${todo.isCompleted ? styles.opacity : ""}`}
      style={{ background: item.gradiant, borderLeftColor: item.color }}
    >
      <div className={styles.date}>{todo.date}</div>
      <div className={styles.desc} onClick={onCompleted}>
        <p className={todo.isCompleted ? styles.completed : ""}>{todo.text}</p>
        <FaCheck
          className={todo.isCompleted ? styles.checkIcon : styles.hidden}
        />
      </div>
      <div className={styles.btnsWrapper}>
        <button className={styles.edit} onClick={onEdit}>
          <FaEdit />
        </button>
        <button className={styles.delete} onClick={onDelete}>
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default Todo;
