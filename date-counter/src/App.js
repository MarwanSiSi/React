import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function upCount() {
    setCount((c) => c + step);
  }

  function downCount() {
    setCount((c) => c - step);
  }

  function handleToday() {
    return `Today is ${new Date().toDateString()}`;
  }

  function handleFuture() {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + count);
    return `The date ${count} days from now is ${currentDate.toDateString()}`;
  }

  function handlePast() {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - Math.abs(count));
    return `The date ${Math.abs(
      count
    )} days ago was ${currentDate.toDateString()}`;
  }

  return (
    <div>
      <div>
        <input
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={(e) => setStep(+e.target.value)}
        />
        <span> STEP: {step} </span>
      </div>
      <div>
        <button onClick={downCount}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(+e.target.value)}
        />
        <button onClick={upCount}>+</button>
      </div>

      <p>{`${
        count === 0 ? handleToday() : count > 0 ? handleFuture() : handlePast()
      } `}</p>
      {(count !== 0 || step !== 1) && (
        <div>
          <button
            onClick={() => {
              setCount(0);
              setStep(1);
            }}
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
