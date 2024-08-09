import styles from "./InputField.module.css";

function InputField({ input, handleInputChange, handleAddTodo }) {
  return (
    <form onSubmit={handleAddTodo}>
      <input
        placeholder="what do you want to do"
        className={styles.input}
        value={input}
        onChange={handleInputChange}
        type="text"
      />
    </form>
  );
}

export default InputField;
