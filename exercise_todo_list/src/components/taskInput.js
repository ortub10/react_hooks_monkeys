import React, { useRef } from "react";

function TaskInput(props) {
  const nameRef = useRef();
  const timeRef = useRef();

  const onAddTaskClick = () => {
    let todoItem = {
      name: nameRef.current.value,
      time: timeRef.current.value,
      id: Date.now(),
    };
    props.addTask(todoItem);
  };

  return (
    <div>
      <h3>Task name:</h3>
      <input ref={nameRef} type="text" className="form-control" />
      <h3>Task time:</h3>
      <input
        ref={timeRef}
        type="time"
        defaultValue="09:00"
        className="form-control"
      />
      <div className="my-3 text-center">
        <button onClick={onAddTaskClick} className="btn btn-success me-2">
          Add task
        </button>
        <button
          onClick={() => props.removeAllTasks()}
          className="btn btn-danger"
        >
          Reset tasks
        </button>
      </div>
    </div>
  );
}

export default TaskInput;
