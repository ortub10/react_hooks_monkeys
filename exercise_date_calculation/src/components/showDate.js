import React from "react";

function ShowDate(props) {
  return (
    <div className="col-lg-6 text-center mx-auto">
      <h2>Date countdown: {props.deadline} </h2>
      <h3>Days left: --</h3>
    </div>
  );
}

export default ShowDate;
