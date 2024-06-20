import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpened, setIsOpened] = useState(true);

  function handleNext() {
    step < 3 ? setStep((s) => s + 1) : setStep(3);
  }

  function handlePrevious() {
    step > 1 ? setStep((s) => s - 1) : setStep(1);
  }

  return (
    <>
      <button onClick={() => setIsOpened((is) => !is)} className="close">
        &times;
      </button>
      {isOpened && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              onClick={handlePrevious}
              style={{ backgroundColor: "#7950f2", color: "white" }}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              style={{ backgroundColor: "#7950f2", color: "white" }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
