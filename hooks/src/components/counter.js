import { useState } from "react";

function Counter(props) {
  let [counter, setCounter] = useState(5);
  let [user, setUser] = useState("koko");

  const addCounter = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <h2>
        Counter: {counter} - User: {user}
      </h2>
      <button onClick={() => setUser("biden")}>Change user</button>
      <button onClick={() => setCounter(0)}>Reset counter</button>
      <button onClick={addCounter}>Add counter</button>
    </div>
  );
}

export default Counter;
