import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './component';  // Import CardComponent

@NgModule({
  declarations: [
    AppComponent,
    CardComponent  // Add CardComponent here
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent]  // Bootstrap with AppComponent only
})
export class AppModule { }