import styles from "./Button.module.css";

function Button({ children, handler }) {
  return (
    <button
      className={`${children === "ADD" ? styles.add : styles.delete}`}
      onClick={handler}
    >
      {children}
    </button>
  );
}

export default Button;
