import * as todo_action from "../actions";
import { ToDo } from "../../models/todo.model";

export interface ToDoState {
  todo: ToDo[];
  loading: boolean;
  loaded: boolean;
}

export const initialState: ToDoState = {
  todo: [],
  loading: false,
  loaded: false
};

export function reducers(state = initialState, action: todo_action.TodoActionTypes): ToDoState {
  switch (action.type) {
    // TO DO LOAD CASES
    case todo_action.TODO_LOAD: {
      return {
        ...state,
        loading: true
      };
    }
    case todo_action.TODO_LOAD_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
    case todo_action.TODO_LOAD_SUCCESS: {
      const todo = [...state.todo, ...action.payload];
      return {
        ...state,
        todo,
        loading: false,
        loaded: true
      };
    }

    // TODO ADD CASES
    case todo_action.TODO_ADD: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }
    case todo_action.TODO_ADD_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
    case todo_action.TODO_ADD_SUCCESS: {
      let todo = [...state.todo, action.payload];
      return {
        ...state,
        todo,
        loading: false,
        loaded: true
      };
    }

    // TO DO UPDATE CASES
    case todo_action.TODO_UPDATE: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }
    case todo_action.TODO_UPDATE_FAIL: {
      return state;
    }
    case todo_action.TODO_UPDATE_SUCCESS: {
      let todo = state.todo.map(todo => {
        if (todo._id === action.payload._id) {
          return action.payload;
        } else {
          return todo;
        }
      });
      return {
        ...state,
        todo,
        loaded: true,
        loading: false
      };
    }

    // TO DO REMOVE CASES
    case todo_action.TODO_REMOVE_ALL: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }
    case todo_action.TODO_REMOVE_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
    case todo_action.TODO_REMOVE_SUCCESS: {
      let todo = action.payload;
      return {
        ...state,
        todo,
        loading: false,
        loaded: true
      };
    }
  }
  //default return if case not match
  return state;
}
