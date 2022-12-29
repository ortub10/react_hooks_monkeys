import React, { useEffect, useState } from "react";

function ShowDate(props) {
  let [days, setDays] = useState();

  useEffect(() => {
    let time = Date.parse(props.deadline) - Date.now();
    let newDays = Math.floor(time / (1000 * 60 * 60 * 24));
    setDays(newDays);
  }, [props.deadline]);
  return (
    <div className="col-lg-6 text-center mx-auto">
      <h2>Date countdown: {props.deadline} </h2>
      <h3>Days left: {days}</h3>
    </div>
  );
}

export default ShowDate;
