import { useState, useReducer } from "react";

//! Reducer function
// 1. It takes two arguments: state and action.
// 2. It returns a new state based on the "action.type".

function reducer(state, action) {
  switch (action.type) {
    case "decCount":
      return { ...state, count: state.count - action.payload };
    case "incCount":
      return { ...state, count: state.count + action.payload };
    case "setStep":
      return { ...state, step: action.payload };
    case "setCount":
      return { ...state, count: action.payload };
    case "reset":
      return { count: 0, step: 1 };
    default:
      return state;
  }
}

function DateCounter() {
  // count is the state and dispatch calls the reducer function to updates the state.

  const initialState = { count: 0, step: 1 };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;

  const date = new Date("june 21 2024");
  date.setDate(date.getDate() + count);

  const dec = function () {
    // Here we are using the dispatch function to update the state and the "action.type" is dec, hence the reducer function will return the logic for the "dec" action.type.

    dispatch({ type: "decCount", payload: step });
  };

  const inc = function () {
    dispatch({ type: "incCount", payload: step });
  };

  const defineCount = function (e) {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  };

  const defineStep = function (e) {
    //TODO
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  };

  const reset = function () {
    //TODO
    dispatch({ type: "reset" });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
