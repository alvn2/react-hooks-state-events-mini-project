import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[0]);

  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit({
      text,  // Changed from 'details' to 'text'
      category,
    });
    setText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text">Details</label>
      <input
        type="text"
        id="text"
        name="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <label htmlFor="category">Category</label>
      <select
        id="category"
        name="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <button type="submit">Add task</button>
    </form>
  );
}

export default NewTaskForm;
