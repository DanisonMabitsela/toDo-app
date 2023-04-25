import React, { useState } from "react";
import { useDispatch } from "react-redux";

function TodoForm() {
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    if (content !== "") {
      dispatch({ type: "ADD_TODO", payload: { content } });

      setContent("");
    }
  }

  function handleChange(event) {
    setContent(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={content} onChange={handleChange} />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
