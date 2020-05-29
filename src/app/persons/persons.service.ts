import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PersonsService {
  personChanged = new Subject<string[]>();
  persons: string[] = [];
  // persons: string[] = ['Sandeep', 'Ajay', 'Bhavuk'];

  constructor(private http: HttpClient) { }

  fetchPerson() {
    this.http.get<any>('https://swapi.dev/api/people/').pipe(map(resData => {
      return resData.results.map(character => character.name);
    })).subscribe(TransformedData => {
      console.log(TransformedData);
      this.personChanged.next(TransformedData);
      // this.persons.push(TransformedData);
    });
  }

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
