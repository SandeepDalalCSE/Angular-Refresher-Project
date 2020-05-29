import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PersonsService {
  personChanged = new Subject<string[]>();
  persons: string[] = ['Sandeep', 'Ajay', 'Bhavuk'];

  addPerson(name: string) {
    this.persons.push(name); // item is push into array but still not updated to the DOM because of angular behavior.
    this.personChanged.next(this.persons); // Here we updating fresh persons array using the object of Subject.
    console.log(this.persons);
  }

  removePerson(name: string) {
    this.persons = this.persons.filter((person, personIndex, personArray) => {
      console.log(person);
      console.log(personIndex);
      console.log(personArray);
      return person !== name;
    });
    console.log(this.persons);
    this.personChanged.next(this.persons);
  }

  // We need to subscribe this event 'personChanged' in other parts of the app.
}
