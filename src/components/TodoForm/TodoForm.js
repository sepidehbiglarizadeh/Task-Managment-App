import styles from "./TodoForm.module.css";
import { FaPlusCircle } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

const TodoForm = () => {
  const [inputValue, setInputValue] = useState("");

  const inputRef= useRef(null);

  useEffect(()=>{
    inputRef.current.focus();
  },[])

  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form className={styles.form}>
      <div className={styles.formControl}>
        <input onChange={changeHandler} value={inputValue} ref={inputRef}/>
        <button>
          <FaPlusCircle />
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
