import Button from "./Button";

function FinishedScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) {
    emoji = "🏅";
  } else if (percentage >= 80 && percentage < 100) {
    emoji = "🎉";
  } else if (percentage >= 50 && percentage < 80) {
    emoji = "😐";
  } else {
    emoji = "😢";
  }

  return (
    <>
      <p className="result">
        <span>{emoji}</span>
        You scored <strong>{points}</strong> out of {maxPossiblePoints} (
        {Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(HighScore: {highscore} points)</p>
      <Button dispatch={dispatch} type={"restart"}>
        Restart Quiz
      </Button>
    </>
  );
}

export default FinishedScreen;
