import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import * as fromToDo from "./store/actions";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "app";
  count = 0;
  showButton: boolean = false;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.store.select("todos").subscribe(data => {
      let { todo } = data;
      this.count = todo.length;
      this.showButton = this.count > 0 ? true : false;
    });
  }

  clearTasks() {
    this.store.dispatch(new fromToDo.removeTodos());
  }
}
