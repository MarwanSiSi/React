import Bin from "../Bin";
import styles from "./ListItemContainer.module.css";

function ListItemContainer({ text, handleDeleteTodo, list, index }) {
  return (
    <div className={styles.container}>
      <p className={styles.item}>{text}</p>
      <Bin onClick={() => handleDeleteTodo(list[index])} />
      {/* <Button handler={() => handleDeleteTodo(list[index])}>Delete</Button> */}
    </div>
  );
}

export default ListItemContainer;
