import { Component } from '@angular/core';

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent {
  // receving a value as an argument of type string in a variable 'personName'.
  onCreatePerson(personName: string) {
    console.log("Created a person : " + personName);
  }
}
