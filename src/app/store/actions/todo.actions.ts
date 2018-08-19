import { Action } from "@ngrx/store";
import { ToDo } from "../../models/todo.model";

/*
  TODO LOAD ACTIONS
*/

export const TODO_LOAD = "[TODO] Load Todo Items";
export const TODO_LOAD_FAIL = "[TODO] Load Todo Items Fail";
export const TODO_LOAD_SUCCESS = "[TODO] Load Todo Items Success";

export class loadTodos implements Action {
  readonly type = TODO_LOAD;
}

export class loadTodosFail implements Action {
  readonly type = TODO_LOAD_FAIL;
  constructor(public payload: any) {}
}

export class loadTodosSuccess implements Action {
  readonly type = TODO_LOAD_SUCCESS;
  constructor(public payload: ToDo[]) {}
}

/*
  TODO ADD ACTIONS
*/

export const TODO_ADD = "[TODO] Add Todo Item";
export const TODO_ADD_FAIL = "[TODO] Add Todo Item Fail";
export const TODO_ADD_SUCCESS = "[TODO] Add Todo Item Success";

export class addTodo implements Action {
  readonly type = TODO_ADD;
  constructor(public payload: ToDo) {}
}

export class addTodoFail implements Action {
  readonly type = TODO_ADD_FAIL;
}

export class addTodoSuccess implements Action {
  readonly type = TODO_ADD_SUCCESS;
  constructor(public payload: ToDo) {}
}

/*
  TODO UPDATE ACTIONS
*/

export const TODO_UPDATE = "[TODO] Update Todo Item";
export const TODO_UPDATE_FAIL = "[TODO] Update Todo Item Fail";
export const TODO_UPDATE_SUCCESS = "[TODO] Update Todo Item Success";

export class updateTodo implements Action {
  readonly type = TODO_UPDATE;
  constructor(public payload: any) {}
}

export class updateTodoFail implements Action {
  readonly type = TODO_UPDATE_FAIL;
}

export class updateTodoSuccess implements Action {
  readonly type = TODO_UPDATE_SUCCESS;
  constructor(public payload: any) {}
}

/*
  TODO REMOVE ACTIONS
*/

export const TODO_REMOVE_ALL = "[TODO] Remove All";
export const TODO_REMOVE_FAIL = "[TODO] Remove Todo Item Fail";
export const TODO_REMOVE_SUCCESS = "[TODO] Remove Todo Item Success";

export class removeTodos implements Action {
  readonly type = TODO_REMOVE_ALL;
}

export class removeTodosFail implements Action {
  readonly type = TODO_REMOVE_FAIL;
}

export class removeTodosSuccess implements Action {
  readonly type = TODO_REMOVE_SUCCESS;
  constructor(public payload: any) {}
}

// Export all actions

export type TodoActionTypes =
  | addTodo
  | addTodoFail
  | addTodoSuccess
  | loadTodos
  | loadTodosSuccess
  | loadTodosFail
  | updateTodo
  | updateTodoSuccess
  | updateTodoFail
  | removeTodos
  | removeTodosSuccess
  | removeTodosFail;
