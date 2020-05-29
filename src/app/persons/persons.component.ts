import { Component, Input } from '@angular/core';
import { PersonsService } from './persons.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html'
})
export class PersonsComponent {
  personList: string[] = [];

  constructor(private prsService: PersonsService) {
    this.personList = prsService.persons;
  }
  // @Input() personList: string[] = [];
}


// After creating we need to register this component in out angular module or some other module.
