import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { ListComponent } from "./list/list.component";

// reducers
import * as ToDoStore from "./store";

@NgModule({
  declarations: [AppComponent, HeaderComponent, ListComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot(ToDoStore.reducers),
    EffectsModule.forRoot(ToDoStore.effects)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
