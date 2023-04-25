import { createStore } from "redux";

import rootReducer from "./reducers";

// Define the initial state for the todo application
const initialTodoState = {
  nextId: 2,
  data: {
    1: {
      content: "Content 1",
      completed: false,
    },
  },
};

// Define the reducer function which takes the current state and an action, and returns a new state
function todoReducer(state = initialTodoState, action) {
  switch (action.type) {
    // Handle the ADD_TODO action
    case "ADD_TODO":
      const newId = state.nextId;

      const newData = Object.assign({}, state.data, {
        [newId]: {
          content: action.payload.content,
          completed: false,
        },
      });
      // Return the new state with the updated nextId and data
      return Object.assign({}, state, {
        nextId: newId + 1,
        data: newData,
      });
    // Handle the DELETE_TODO action
    case "DELETE_TODO":
      const { [action.payload.id]: _, ...rest } = state.data;

      const newData2 = Object.assign({}, rest);

      return Object.assign({}, state, {
        data: newData2,
      });
    // Handle the EDIT_TODO action
    case "EDIT_TODO":
      const newData3 = Object.assign({}, state.data, {
        [action.payload.id]: Object.assign({}, state.data[action.payload.id], {
          content: action.payload.content,
        }),
      });

      return Object.assign({}, state, {
        data: newData3,
      });
    // Handle the COMPLETE_TODO action
    case "COMPLETE_TODO":
      const newData4 = Object.assign({}, state.data, {
        [action.payload.id]: Object.assign({}, state.data[action.payload.id], {
          completed: true,
        }),
      });

      return Object.assign({}, state, {
        data: newData4,
      });
    // Handle the default case where no action is provided
    default:
      return state;
  }
}

const store = createStore(todoReducer);

export default store;
