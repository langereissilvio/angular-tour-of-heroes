import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //<--NgModel lives here

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ], // <-- import relevant modules
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
