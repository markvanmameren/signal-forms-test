import { JsonPipe } from '@angular/common';
import { Component, model } from '@angular/core';
import { form, FormField, required } from '@angular/forms/signals';
import { ErrorsComponent } from '../errors/errors.component';
import { Person } from '../../type/person.type';

@Component({
  selector: 'app-person-form',
  imports: [FormField, JsonPipe, ErrorsComponent],
  templateUrl: './person-form.component.html',
  styleUrl: './person-form.component.css',
})
export class PersonFormComponent {
  person = model.required<Person>();

  form = form(this.person, ({ firstName, lastName, age, email }) => {
    required(firstName, { message: 'Voornaam is verplicht' });
    required(lastName, { message: 'Achternaam is verplicht' });
    required(age, { message: 'Leeftijd is verplicht' });
    required(email, { message: 'E-mail is verplicht' });
  });

  onSubmit(): void {
    if (this.form().invalid()) alert('invalid');
    if (this.form().valid()) alert('valid');
  }
}
