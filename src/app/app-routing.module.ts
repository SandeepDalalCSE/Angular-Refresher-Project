import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonsComponent } from './persons/persons.component';
import { PersonInputComponent } from './persons/person-input.component';

// Now routes is an array, an array of Javascript object where every object is the definition of a route.
// the Angular router is then able to pass and handle.
// Now a route definition in its simplest form has a path which is the path,so the part after your domain you want to load a certain page for.
const routes: Routes = [
  {
    path: '', // http://localhost:4200/
    component: PersonsComponent
  },
  {
    path: 'input', // http://localhost:4200/input
    component: PersonInputComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
