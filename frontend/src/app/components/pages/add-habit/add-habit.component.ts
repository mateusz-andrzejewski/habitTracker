import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { HabitService } from 'src/app/services/habit.service';
import { ToastService } from 'src/app/shared/services/toast.service';

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

  constructor(
    private _fb: FormBuilder,
    private _toastService: ToastService,
    private _habitService: HabitService
  ) {}

  onSubmit() {
    this._habitService.addhabit(this.form.value).subscribe({
      next: (value) => {
        this._toastService.showSuccess({ text: 'Dodano nawyk' });
        console.log(value);
      },
      error: (err) => {
        this._toastService.showDanger({ text: 'Dodanie nie powiodło się' });
      },
    });
  }
}
