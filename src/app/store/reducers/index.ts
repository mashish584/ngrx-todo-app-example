import { ActionReducerMap } from "@ngrx/store";
import * as fromToDo from "./todo.reducers";

export interface ApplicationState {
  todos: fromToDo.ToDoState;
}

export const reducers: ActionReducerMap<ApplicationState> = {
  todos: fromToDo.reducers
};
