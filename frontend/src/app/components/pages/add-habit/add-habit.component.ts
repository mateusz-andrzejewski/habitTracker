import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

export interface habitForm {
  name: FormControl<string>;
  category: FormControl<string>;
  dateStart: FormControl<string>;
  dateEnd: FormControl<string>;
  frequencyWeek: FormControl<string>;
  goal: FormControl<string>;
}

@Component({
  selector: 'app-add-habit',
  templateUrl: './add-habit.component.html',
  styleUrls: ['./add-habit.component.scss'],
})
export class AddHabitComponent {
  form = this._fb.group<habitForm>({
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    category: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    dateStart: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    dateEnd: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    frequencyWeek: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    goal: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  constructor(private _fb: FormBuilder) {}
  showValue(value: any) {
    console.log(value);
  }
}
