import React, { useState } from "react";
import InputDate from "./inputDate";
import ShowDate from "./showDate";

function AppDate(props) {
  let [deadline, setDeadline] = useState("2023-01-01");

  const changeDate = (_newDate) => {
    setDeadline(_newDate);
  };

  return (
    <div>
      <ShowDate deadline={deadline} />
      <InputDate changeDate={changeDate} />
    </div>
  );
}

export default AppDate;
