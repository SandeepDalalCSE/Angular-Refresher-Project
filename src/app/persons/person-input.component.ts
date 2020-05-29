import { Component, Output, EventEmitter } from '@angular/core';
import { PersonsService } from './persons.service';

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent {
  // creating object based on this EventEmitter Class, plus this object is also a property of this class 'PersonInputComponent'
  // @Output() personCreate = new EventEmitter<string>();
  enteredPersonName = '';

  constructor(private personService: PersonsService) {

  }

  onCreatePerson() {
    this.personService.addPerson(this.enteredPersonName);
    this.enteredPersonName = '';
  }

  // Using Two-Way-Binding concept.
  // receving a value as an argument of type string in a variable 'personName'.
  // onCreatePerson() {
  //   console.log("Created a person : " + this.enteredPersonName);
  //   // Here we have value from the input field so, we will be emitting it using an event emitter.
  //   this.personCreate.emit(this.enteredPersonName); // Object personCreate will carry value.
  //   // emit() is defined and declared in EventEmitter Class,so object/instance of EventEmitter class is calling it
  //   this.enteredPersonName = '';
  // }

  // Using local reference concept
  // // receving a value as an argument of type string in a variable 'personName'.
  // onCreatePerson(personName: string) {
  //   console.log("Created a person : " + personName);
  // }

}
