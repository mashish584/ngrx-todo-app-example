import { Component, OnInit, Input } from "@angular/core";
import { Store } from "@ngrx/store";
import { TodoService } from "./../todo.service";
import * as fromStore from "./../store";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  task: string = "";
  @Input("count") total;

  constructor(private _todoService: TodoService, private store: Store<any>) {}

  ngOnInit() {}

  addTask() {
    this.store.dispatch(new fromStore.addTodo({ task: this.task }));
    this.task = "";
  }
}
