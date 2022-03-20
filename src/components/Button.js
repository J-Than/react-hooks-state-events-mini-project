import React, { useState } from "react";

function Button({ category, onFilter, activeCategory }) {

  function handleButton() {
    onFilter(category);
  }

  return (
    <button className={category === activeCategory ? "selected" : null} onClick={handleButton}>{category}
    </button>
  );
}

export default Button;
