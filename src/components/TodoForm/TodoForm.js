import styles from "./TodoForm.module.css";
import { FaPlusCircle ,FaCheck} from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

const TodoForm = ({submitTodoHandler,edit}) => {
  const [inputValue, setInputValue] = useState(edit ? edit.text : "");

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
        <input onChange={changeHandler} value={inputValue} ref={inputRef} placeholder={edit ? "update todo..." : "add todo..."}/>
        <button>
          {edit ? <FaCheck/> : <FaPlusCircle />}
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
