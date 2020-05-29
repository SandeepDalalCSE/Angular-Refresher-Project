import { Component, Input, OnInit } from '@angular/core';
import { PersonsService } from './persons.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html'
})
export class PersonsComponent implements OnInit {
  personList: string[] = [];

  constructor(private prsService: PersonsService) { // Note prsService is the property of PersonsComponent Class and also instance of PersonsService Class.
    // this.personList = prsService.persons;  // this is not recommended way
  }

  ngOnInit() {
    this.personList = this.prsService.persons;
  }

  onRemovePerson(personName: string) {
    this.prsService.removePerson(personName);
  }
  // @Input() personList: string[] = [];
}


// After creating we need to register this component in out angular module or some other module.
