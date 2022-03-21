import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks, setTasks] = useState(TASKS);
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = CATEGORIES;
  const filteredTasks = tasks.filter(task => activeCategory==='All' || task.category===activeCategory)

  function onDelete(target) {
    setTasks(tasks.filter(task => task.text !== target))
  }

  function onFilter(category) {
    setActiveCategory(category);    
  }

  function onTaskFormSubmit(task) {
    setTasks([...tasks, task])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={categories}
        activeCategory={activeCategory}
        onFilter={onFilter}
      />
      <NewTaskForm
        categories={categories}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList
        tasks={filteredTasks}
        onDelete={onDelete}
      />
    </div>
  );
}

export default App;
