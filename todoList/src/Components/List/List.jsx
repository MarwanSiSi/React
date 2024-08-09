import styles from "./List.module.css";
import ListItemContainer from "../ListItemContainer/ListItemContainer";

function List({ list, handleDeleteTodo }) {
  return (
    <div className={styles.test}>
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
