import React from "react";
import TaskItem from "./taskItem";

function TaskList() {
  return (
    <div>
      <h2>Tasks you added: </h2>
      <TaskItem />
    </div>
  );
}

export default TaskList;
