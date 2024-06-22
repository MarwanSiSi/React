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
          <StepMessage step={step}>{messages[step - 1]}</StepMessage>

          <div className="buttons">
            <Button
              textColor={"white"}
              bgColor={"#7950f2"}
              onClick={handlePrevious}
            >
              <span>⬅️</span> Previous
            </Button>
            <Button
              textColor={"white"}
              bgColor={"#7950f2"}
              onClick={handleNext}
            >
              <span>Next ➡️</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function StepMessage({ step, children }) {
  return (
    <p className="message">
      <h3>Step {step}:</h3> {children}
    </p>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {children}
    </button>
  );
}
