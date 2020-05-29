import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { PersonsService } from './persons.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html'
})
export class PersonsComponent implements OnInit, OnDestroy {
  personList: string[] = [];
  private personListSubcription: Subscription;

  constructor(private prsService: PersonsService) { // Note prsService is the property of PersonsComponent Class and also instance of PersonsService Class.
    // this.personList = prsService.persons;  // this is not recommended way
  }

  ngOnInit() {
    this.personList = this.prsService.persons;
    this.personListSubcription = this.prsService.personChanged.subscribe(persons => {
      console.log(persons);
      this.personList = persons;
    });
  }

  onRemovePerson(personName: string) {
    this.prsService.removePerson(personName);
  }

  ngOnDestroy() {
    if (this.personListSubcription) {
      this.personListSubcription.unsubscribe();
    }
  }
  // @Input() personList: string[] = [];
}


// After creating we need to register this component in out angular module or some other module.
