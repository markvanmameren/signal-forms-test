import { Component, input } from '@angular/core';
import { ValidationError } from '@angular/forms/signals';

@Component({
  selector: 'app-error',
  imports: [],
  templateUrl: './error.component.html',
  styleUrl: './error.component.css',
})
export class ErrorComponent {
  error = input.required<ValidationError.WithField>();
}
