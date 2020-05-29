import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Refresher-Project';

  persons: string[] = ['Sandeep', 'Ajay', 'Bhavuk'];

  onPersonCreated(name: string) {
    this.persons.push(name);
  }
}
