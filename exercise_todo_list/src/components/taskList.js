import React from "react";
import TaskItem from "./taskItem";

function TaskList(props) {
  return (
    <div>
      <h2>Tasks you added: </h2>
      {props.taskAr.map((item) => (
        <TaskItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default TaskList;
