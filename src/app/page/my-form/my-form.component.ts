import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { form, FormField, required } from '@angular/forms/signals';
import { ErrorsComponent } from '../../component/errors/errors.component';

@Component({
  selector: 'app-my-form',
  imports: [FormField, JsonPipe, ErrorsComponent],
  templateUrl: './my-form.component.html',
  styleUrl: './my-form.component.css',
})
export class MyFormComponent {
  person = signal({
    firstName: '',
    lastName: '',
    age: 0,
    email: '',
  });

  form = form(this.person, (schema) => {
    required(schema.firstName, { message: 'Voornaam is verplicht' });
    required(schema.lastName, { message: 'Achternaam is verplicht' });
    required(schema.age, { message: 'Leeftijd is verplicht' });
    required(schema.email, { message: 'E-mail is verplicht' });
  });

  onSubmit(): void {
    if (this.form().invalid()) alert('invalid');
    if (this.form().valid()) alert('valid');
  }
}
