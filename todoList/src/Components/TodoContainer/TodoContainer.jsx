import { useEffect, useState } from "react";

import List from "../List/List";
import styles from "./TodoContainer.module.css";
import InputButtonContainer from "../InputButtonContainer/InputButtonContainer";

function TodoContainer() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [empty, setEmpty] = useState(true);

  function handleDeleteTodo(index) {
    setList((prev) => prev.filter((el) => el !== index));
    if (list.length === 1) setEmpty(true);
  }

  function handleInputChange(e) {
    setInput(e.target.value);
  }

  function handleAddTodo(e) {
    e.preventDefault();
    if (!input) return;
    setList((prev) => [...prev, input]);
    setInput("");
    setEmpty(false);
  }

  return (
    <div className={styles.test}>
      <h1>TO-DO LIST</h1>

      <InputButtonContainer
        handleAddTodo={handleAddTodo}
        handleInputChange={handleInputChange}
        input={input}
      />
      <List empty={empty} list={list} handleDeleteTodo={handleDeleteTodo} />
    </div>
  );
}

export default TodoContainer;
