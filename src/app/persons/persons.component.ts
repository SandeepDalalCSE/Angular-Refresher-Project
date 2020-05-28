import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html'
})
export class PersonsComponent {
  @Input() personList: string[] = [];
}


// After creating we need to register this component in out angular module or some other module.
