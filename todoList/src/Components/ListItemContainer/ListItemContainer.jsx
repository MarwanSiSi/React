import Button from "../Button/Button";
import styles from "./ListItemContainer.module.css";

function ListItemContainer({ text, handleDeleteTodo, list, index }) {
  return (
    <div className={styles.container}>
      <p className={styles.item}>{text}</p>
      <Button handler={() => handleDeleteTodo(list[index])}>Delete</Button>
    </div>
  );
}

export default ListItemContainer;
