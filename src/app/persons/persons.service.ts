import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PersonsService {
  persons: string[] = ['Sandeep', 'Ajay', 'Bhavuk'];

  addPerson(name: string) {
    this.persons.push(name);
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
  }
}
