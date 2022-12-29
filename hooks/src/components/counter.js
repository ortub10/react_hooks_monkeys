import { useState } from "react";

function Counter(props) {
  let [counter, setCounter] = useState(5);
  return (
    <div>
      <h2>Counter: {counter}</h2>
    </div>
  );
}

export default Counter;
