import React from "react";

function Task({ text, category, onDelete }) {

  function handleDelete(event) {
    onDelete(event.target.id);
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" id={text} onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;
