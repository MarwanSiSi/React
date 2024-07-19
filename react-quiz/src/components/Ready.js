import Button from "./Button";
function Ready({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <Button dispatch={dispatch} type={"start"} className="btn btn-ui">
        Start Quiz
      </Button>
    </div>
  );
}

export default Ready;
