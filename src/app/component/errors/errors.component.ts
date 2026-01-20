import { Component, input } from '@angular/core';
import { FieldState } from '@angular/forms/signals';
import { ErrorComponent } from '../error/error.component';

@Component({
  selector: 'app-errors',
  imports: [ErrorComponent],
  templateUrl: './errors.component.html',
  styleUrl: './errors.component.css',
})
export class ErrorsComponent {
  fieldState = input.required<FieldState<unknown>>();
}
