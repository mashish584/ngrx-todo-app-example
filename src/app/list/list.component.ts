import { Component, OnInit, ViewChild } from "@angular/core";
import { Store } from "@ngrx/store";
import { ToDo } from "./../models/todo.model";
import * as fromStore from "../store";

import { Observable } from "rxjs";
import { trigger, style, transition, animate, query, stagger, keyframes } from "@angular/animations";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
  animations: [
    trigger("appearAnim", [
      transition("* => *", [
        query(":enter", style({ opacity: 0, transform: "translateX(-55px)" }), { optional: true }),
        query(":enter", stagger("300ms", animate("100ms ease-in", style({ opacity: 1, transform: "translateX(0)" }))), {
          optional: true
        }),
        query(":leave", stagger("100ms", animate("100ms ease-in", style({ opacity: 0, transform: "translateX(-55px)" }))), {
          optional: true
        })
      ])
    ])
  ]
})
export class ListComponent implements OnInit {
  editMode: boolean = false;
  active: number;
  taskList: Observable<ToDo[]>;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.taskList = this.store.select("todos");
    this.store.dispatch(new fromStore.loadTodos());
  }

  showEdit(index: number) {
    this.editMode = true;
    this.active = index;
  }

  update(id, value) {
    this.store.dispatch(new fromStore.updateTodo({ type: "task", value, _id: id }));
    this.editMode = false;
  }

  updateStatus(id, value) {
    this.store.dispatch(new fromStore.updateTodo({ type: "complete", value, _id: id }));
    this.editMode = false;
  }
}
