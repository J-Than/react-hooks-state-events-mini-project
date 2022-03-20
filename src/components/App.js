import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks, setTasks] = useState(TASKS);
  const [categories, setCategories] = useState(CATEGORIES);
  const [activeCategory, setActiveCategory] = useState("All");

  function handleDelete(target) {
    setTasks(tasks.filter(task => task.text !== target))
  }

  function handleCategoryChange(category) {
    setActiveCategory(category);    
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories} activeCategory={activeCategory} onFilter={handleCategoryChange} />
      <NewTaskForm />
      <TaskList tasks={tasks} onDelete={handleDelete} activeCategory={activeCategory} />
    </div>
  );
}

export default App;
