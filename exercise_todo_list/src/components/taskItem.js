import React from "react";

function TaskItem(props) {
  const { name, time } = props.item;
  return (
    <div className="shadow my-2 p-2">
      <button className="btn btn-danger float-end">X</button>
      <h4>
        {name} - {time}
      </h4>
    </div>
  );
}

export default TaskItem;
