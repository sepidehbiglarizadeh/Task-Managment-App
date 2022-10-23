import styles from "./TodoForm.module.css";
import { FaPlusCircle } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

const TodoForm = ({submitTodoHandler}) => {
  const [inputValue, setInputValue] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    submitTodoHandler(inputValue);
    setInputValue("")
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles.formControl}>
        <input onChange={changeHandler} value={inputValue} ref={inputRef} />
        <button>
          <FaPlusCircle />
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
