function Button({ dispatch, type, answer, children }) {
  if (answer === null) return null;
  return (
    <button onClick={() => dispatch({ type: type })} className="btn btn-ui">
      {children}
    </button>
  );
}

export default Button;
