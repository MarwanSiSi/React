import styles from "./List.module.css";
import ListItemContainer from "../ListItemContainer/ListItemContainer";

function List({ list, handleDeleteTodo, empty }) {
  return (
    <div className={styles.test}>
      {empty && <p className={styles.empty}>Start by adding a Todo 😊</p>}
      {list.map((el, i) => (
        <ListItemContainer
          handleDeleteTodo={handleDeleteTodo}
          index={i}
          list={list}
          text={el}
          key={i}
        />
      ))}
    </div>
  );
}

export default List;
