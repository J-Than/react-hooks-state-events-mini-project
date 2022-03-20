import React from "react";

function Task({ task, onDelete }) {

  function handleDelete(event) {
    const target = event.target.id;
    onDelete(target);
  }

  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button className="delete" id={task.text} onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;
