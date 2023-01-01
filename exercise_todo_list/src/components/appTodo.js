import React, { useState } from "react";
import TaskInput from "./taskInput";
import TaskList from "./taskList";

function AppTodo() {
  const [taskAsr, setTaskAsr] = useState([]);

  const addTask = (_itemTask) => {
    setTaskAsr((prev) => {
      return [...prev, _itemTask];
    });
  };

  return (
    <div className="container">
      <h1 className="display-4 text-center">TODO list</h1>
      <div className="col-lg-6 p-3 mx-auto">
        <TaskInput addTask={addTask} />
        <TaskList taskAsr={taskAsr} />
      </div>
    </div>
  );
}

export default AppTodo;
