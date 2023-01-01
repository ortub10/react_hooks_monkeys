import React from "react";

function TaskItem(props) {
  const { name, time, id } = props.item;
  return (
    <div className="shadow my-2 p-2">
      <button
        onClick={() => {
          props.removeSingleTask(id);
        }}
        className="btn btn-danger float-end"
      >
        X
      </button>
      <h4>
        {name} - {time}
      </h4>
    </div>
  );
}

export default TaskItem;
