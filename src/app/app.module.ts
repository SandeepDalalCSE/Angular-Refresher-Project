import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// Registering persons component in app module.
import { PersonsComponent } from './persons/persons.component';

@NgModule({
  // the selector of persons component will look in all other component in the declarations.
  declarations: [
    AppComponent,
    PersonsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
