import React from "react";
import Button from "./Button";

function CategoryFilter({ categories, activeCategory, onFilter }) {

  const categoryList = categories.map(category => (
    <Button key={`btn_${category}`} category={category} onFilter={onFilter} activeCategory={activeCategory} />
  ))

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryList}
    </div>
  );
}

export default CategoryFilter;
