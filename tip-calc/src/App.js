import { useState } from "react";

function App() {
  const [bill, setBill] = useState("");
  const [choice1, setChoice1] = useState(0);
  const [choice2, setChoice2] = useState(0);

  const tip = bill * ((choice1 + choice2) / 2 / 100);

  function handleReset() {
    setBill("");
    setChoice1(0);
    setChoice2(0);
  }

  return (
    <div>
      <BillInput bill={bill} setBill={setBill} />
      <SelectPercentage choice={choice1} setChoice={setChoice1}>
        {"How did you like the service?"}
      </SelectPercentage>
      <SelectPercentage choice={choice2} setChoice={setChoice2}>
        {"How did your friend like the service?"}
      </SelectPercentage>
      {bill > 0 && (
        <>
          <Output tip={tip} bill={bill} />
          <ButtonReset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ bill, setBill }) {
  return (
    <div style={{ fontSize: "25px", margin: "10px" }}>
      <span>How much was the bill? </span>
      <input
        value={bill}
        onChange={(e) => {
          setBill(+e.target.value);
        }}
        style={{ fontSize: "25px", margin: "10px" }}
        type="text"
        placeholder="Enter an ammount"
      />
    </div>
  );
}

function SelectPercentage({ choice, setChoice, children }) {
  return (
    <div style={{ fontSize: "25px", margin: "10px" }}>
      <label>{children} </label>
      <select
        value={choice}
        onChange={(e) => setChoice(+e.target.value)}
        style={{ fontSize: "25px", margin: "10px" }}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <div style={{ fontSize: "40px", fontWeight: "bold" }}>
      <p>
        You pay ${bill + tip ? bill + tip : 0} (${bill ? bill : 0} + $
        {tip ? tip : 0} tip)
      </p>
    </div>
  );
}

function ButtonReset({ onReset }) {
  return (
    <button onClick={onReset} style={{ fontSize: "25px", margin: "10px" }}>
      Reset
    </button>
  );
}

export default App;
