import { Component } from '@angular/core';
import { Person } from '../../type/person.type';
import { PersonFormComponent } from '../../component/person-form/person-form.component';

@Component({
  selector: 'app-my-page',
  imports: [PersonFormComponent],
  templateUrl: './my-page.component.html',
  styleUrl: './my-page.component.css',
})
export class MyPageComponent {
  initialPerson: Person = {
    firstName: 'Mark',
    lastName: 'van Mameren',
    age: 35,
    email: 'markvanmameren@gmail.com',
  };
}
