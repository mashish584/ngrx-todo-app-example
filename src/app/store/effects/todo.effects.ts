import { Actions, Effect } from "@ngrx/effects";
import { Injectable } from "@angular/core";

import { ToDo } from "../../models/todo.model";
import { TodoService } from "../../todo.service";
import * as fromTodo from "../actions";

// RXJS imports
import { of } from "rxjs";
import { map, switchMap, catchError } from "rxjs/operators";

@Injectable()
export class TodoEffects {
  constructor(private _todoService: TodoService, private action$: Actions) {}

  @Effect()
  loadTask$ = this.action$.ofType(fromTodo.TODO_LOAD).pipe(
    switchMap(task => {
      return this._todoService.getTasks().pipe(
        map(response => {
          const { result } = response;
          return new fromTodo.loadTodosSuccess(result);
        })
      );
    })
  );

  @Effect()
  addTask$ = this.action$.ofType(fromTodo.TODO_ADD).pipe(
    map((action: fromTodo.addTodo) => action.payload),
    switchMap(task => {
      return this._todoService.addTask(task).pipe(
        map(response => {
          const { result } = response;
          return new fromTodo.addTodoSuccess(result);
        }),
        catchError(err => of(new fromTodo.addTodoFail()))
      );
    })
  );

  @Effect()
  updateTask$ = this.action$.ofType(fromTodo.TODO_UPDATE).pipe(
    map((action: fromTodo.updateTodo) => action.payload),
    switchMap(task => {
      return this._todoService.updateTasks(task).pipe(
        map(response => {
          const { result } = response;
          return new fromTodo.updateTodoSuccess(result);
        }),
        catchError(err => of(new fromTodo.updateTodoFail()))
      );
    })
  );

  @Effect()
  deleteTask$ = this.action$.ofType(fromTodo.TODO_REMOVE_ALL).pipe(
    switchMap(() => {
      return this._todoService.deleteTasks().pipe(
        map(response => {
          const { result } = response;
          return new fromTodo.removeTodosSuccess(result);
        }),
        catchError(err => of(new fromTodo.removeTodosFail()))
      );
    })
  );
}
