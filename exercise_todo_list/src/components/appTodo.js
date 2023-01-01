import React from "react";
import TaskInput from "./taskInput";
import TaskList from "./taskList";

function AppTodo() {
  return (
    <div className="container">
      <TaskInput />
      <TaskList />
    </div>
  );
}

export default AppTodo;
