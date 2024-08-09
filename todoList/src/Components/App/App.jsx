import TodoContainer from "../Container/TodoContainer";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.mainDiv}>
      <TodoContainer />
    </div>
  );
}

export default App;
