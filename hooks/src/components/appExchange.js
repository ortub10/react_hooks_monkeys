import React, { useRef, useState } from "react";

function AppExchange() {
  let coinRef = useRef();
  let amountRef = useRef();
  let [toal, setToal] = useState(0);

  const calcToal = () => {
    let myToal = coinRef.current.value * amountRef.current.value;
    setToal(myToal);
  };
  return (
    <div className="col-lg-6 p-3 shadow mt-3 max-auto">
      <h2>Enter the coin you want: </h2>
      <select onChange={calcToal} ref={coinRef} className="form-select">
        <option value="0">chose</option>
        <option value="3.3">USD</option>
        <option value="3.9">EURO</option>
        <option value="0.11">BATH</option>
      </select>
      <h2>Enter the amount you want: </h2>
      <input
        onInput={calcToal}
        ref={amountRef}
        type="number"
        defaultValue="100"
        className="form-control"
      />
      <h3 className="mt-4">You will get {toal.toFixed(2)} NIS</h3>
    </div>
  );
}

export default AppExchange;
