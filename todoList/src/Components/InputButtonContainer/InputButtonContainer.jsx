import Button from "../Button/Button";
import InputField from "../InputField/InputField";
import styles from "./InputButtonContainer.module.css";

function InputButtonConatiner({ input, handleAddTodo, handleInputChange }) {
  return (
    <div className={styles.inputArea}>
      <InputField
        input={input}
        handleAddTodo={handleAddTodo}
        handleInputChange={handleInputChange}
      />
      <Button handler={handleAddTodo}>ADD</Button>
    </div>
  );
}

export default InputButtonConatiner;
