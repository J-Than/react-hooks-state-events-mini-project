import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDelete }) {

  const taskList = tasks.map(task => (
    <Task key={task.text} task={task} onDelete={onDelete} />
  ));

  return (
    <div className="tasks">
      {taskList}
    </div>
  );
}

export default TaskList;
