import React, { useEffect, useState } from "react";
import { sortBy } from "lodash";
import TaskInput from "./taskInput";
import TaskList from "./taskList";

function AppTodo() {
  const [taskAr, setTaskAr] = useState([]);

  useEffect(() => {
    if (localStorage["tasks"]) {
      setTaskAr(JSON.parse(localStorage["tasks"]));
    }
  }, []);

  const addTask = (_itemTask) => {
    let sort_ar = [...taskAr, _itemTask];
    sort_ar = sortBy(sort_ar, "time");
    saveLocal(sort_ar);
  };

  const removeAllTasks = () => {
    saveLocal([]);
  };

  const removeSingleTask = (_delId) => {
    let temp_ar = taskAr.filter((item) => item.id !== _delId);
    saveLocal(temp_ar);
  };

  const saveLocal = (_ar) => {
    localStorage.setItem("tasks", JSON.stringify(_ar));
    setTaskAr(_ar);
  };

  return (
    <div className="container">
      <h1 className="display-4 text-center">TODO list</h1>
      <div className="col-lg-6 p-3 mx-auto">
        <TaskInput removeAllTasks={removeAllTasks} addTask={addTask} />
        <TaskList removeSingleTask={removeSingleTask} taskAr={taskAr} />
      </div>
    </div>
  );
}

export default AppTodo;
