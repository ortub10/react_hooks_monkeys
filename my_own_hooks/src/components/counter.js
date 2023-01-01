import React from "react";
import useCounter from "../hooks/useCounter";

function Counter() {
  const [number, addOneNumber, resetNumber] = useCounter(3);
  return (
    <div className="container">
      <h2>Counter: {number} </h2>
      <button onClick={addOneNumber}>Add 1</button>
      <button onClick={resetNumber}>Reset</button>
    </div>
  );
}

export default Counter;
