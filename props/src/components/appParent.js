import React, { useState } from "react";
import Message from "./message";

function AppParent() {
  let [show, setShow] = useState(true);

  const hideMessage = () => {
    setShow(false);
  };
  return (
    <div>
      <h2>Parent component</h2>
      {show && <Message hideMessage={hideMessage} txt="Work from parent" />}
    </div>
  );
}

export default AppParent;
