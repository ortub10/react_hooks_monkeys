import React from "react";
import { toast } from "react-toastify";

function AppToast() {
  const onShowMessage = () => {
    toast.success("Hello from toast");
  };

  return (
    <div className="container mt-3">
      <button onClick={onShowMessage}>Click me to show message</button>
    </div>
  );
}

export default AppToast;
