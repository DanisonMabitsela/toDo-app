import React from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const todoList = useSelector((state) => state.data);

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm />
      <ul>
        {Object.entries(todoList).map(([id, todo]) => (
          <TodoItem
            key={id}
            id={id}
            content={todo.content}
            completed={todo.completed}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
