import React from "react";
import { useDispatch } from "react-redux";

function TodoItem(props) {
  // Get the dispatch function from the Redux store
  const dispatch = useDispatch();

  // Function to handle deleting a todo item
  function handleDelete() {
    dispatch({ type: "DELETE_TODO", payload: { id: props.id } });
  }

  // Function to handle editing a todo item
  function handleEdit() {
    // Use the prompt() function to get new content for the todo item
    const newContent = prompt("Enter new content:", props.content);
    if (newContent !== null) {
      dispatch({
        type: "EDIT_TODO",
        payload: { id: props.id, content: newContent },
      });
    }
  }

  // Function to handle marking a todo item as completed
  function handleComplete() {
    dispatch({ type: "COMPLETE_TODO", payload: { id: props.id } });
  }

  // Render the todo item with its content and three buttons: edit, delete, and complete (if not completed already)
  return (
    <li>
      {props.content}
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
      {!props.completed && <button onClick={handleComplete}>Completed</button>}
    </li>
  );
}

export default TodoItem;
