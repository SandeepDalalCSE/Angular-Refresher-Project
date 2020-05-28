import { Component } from '@angular/core';

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent {
  enteredPersonName = '';

  // Using Two-Way-Binding concept.
  // receving a value as an argument of type string in a variable 'personName'.
  onCreatePerson() {
    console.log("Created a person : " + this.enteredPersonName);
    this.enteredPersonName = '';
  }

  // Using local reference concept
  // // receving a value as an argument of type string in a variable 'personName'.
  // onCreatePerson(personName: string) {
  //   console.log("Created a person : " + personName);
  // }

}
