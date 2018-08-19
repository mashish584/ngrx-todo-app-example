import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ToDo } from "./models/todo.model";

@Injectable({
  providedIn: "root"
})
export class TodoService {
  constructor(private http: HttpClient) {}

  addTask(task) {
    return this.http.post<{ message: string; result: ToDo }>("api/todo", task);
  }

  getTasks() {
    return this.http.get<{ message: string; result: ToDo[] }>("api/todo");
  }

  updateTasks(update) {
    return this.http.put<{ message: string; result: ToDo }>("api/todo", update);
  }

  deleteTasks() {
    return this.http.delete<{ message: string; result: ToDo[] }>("api/todo/all");
  }
}
