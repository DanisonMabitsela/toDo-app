import React from "react";
import { createStore } from "redux";

const initialTodoState = {
  nextId: 2,
  data: {
    1: {
      content: "Content 1",
      completed: false,
    },
  },
};

const todoReducer = (state = initialTodoState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        nextId: state.nextId + 1,
        data: {
          ...state.data,
          [state.nextId]: {
            content: action.payload,
            completed: false,
          },
        },
      };
    case "DELETE_TODO":
      const { [action.payload]: deletedTodo, ...remainingTodos } = state.data;
      return {
        ...state,
        data: remainingTodos,
      };
    case "EDIT_TODO":
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.id]: {
            ...state.data[action.payload.id],
            content: action.payload.content,
          },
        },
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload]: {
            ...state.data[action.payload],
            completed: !state.data[action.payload].completed,
          },
        },
      };
    default:
      return state;
  }
};

const store = createStore(todoReducer);
