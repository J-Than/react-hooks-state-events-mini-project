import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {

  const notAll = categories.filter(category => category!=='All');
  const [newTask, setNewTask] = useState({text: "", category: "Code"})

  function onNewTask(name, value) {
    setNewTask({...newTask, [name]: value})
  }
  const options = notAll.map(category => (
    <option key={`opt_${category}`}>{category}</option>
    )
  )

  function updateNewTask(event) {
    onNewTask(event.target.name, event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault();
    onTaskFormSubmit(newTask);
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit} >
      <label>
        Details
        <input type="text" name="text" value={newTask.text} onChange={updateNewTask} />
      </label>
      <label>
        Category
        <select name="category" value={newTask.category} onChange={updateNewTask} >
          {options}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
