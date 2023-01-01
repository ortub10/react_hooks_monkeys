import React, { useState } from "react";
import TaskInput from "./taskInput";
import TaskList from "./taskList";

function AppTodo() {
  const [taskAr, setTaskAr] = useState([]);

  const addTask = (_itemTask) => {
    setTaskAr((prev) => [...prev, _itemTask]);
  };

  const removeAllTasks = () => {
    setTaskAr([]);
  };

  return (
    <div className="container">
      <h1 className="display-4 text-center">TODO list</h1>
      <div className="col-lg-6 p-3 mx-auto">
        <TaskInput removeAllTasks={removeAllTasks} addTask={addTask} />
        <TaskList taskAr={taskAr} />
      </div>
    </div>
  );
}

export default AppTodo;
