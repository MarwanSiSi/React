import styles from "./Button.module.css";
import PropTypes from "prop-types";

function Button({ children, onClick, type }) {
  return (
    <button
      className={(() => {
        switch (type) {
          case "primary":
            return `${styles.primary} ${styles.btn}`;
          case "back":
            return `${styles.back} ${styles.btn}`;
          case "position":
            return `${styles.position} ${styles.btn}`;
          default:
            return styles.btn;
        }
      })()}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  onClick: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
