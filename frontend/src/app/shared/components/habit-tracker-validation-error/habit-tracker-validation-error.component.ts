import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'habit-tracker-validation-error',
  templateUrl: './habit-tracker-validation-error.component.html',
  styleUrls: ['./habit-tracker-validation-error.component.scss'],
})
export class HabitTrackerValidationErrorComponent implements OnInit, OnDestroy {
  @Input() formControlError!: FormControl;

  subcription = new Subscription();

  showError!: boolean | null;

  ngOnInit(): void {
    this.subcription.add(
      this.formControlError.valueChanges
        .pipe(distinctUntilChanged())
        .subscribe((newValue) => {
          if (this.formControlError?.errors?.['required']) {
            this.showError = this.formControlError?.errors?.['required'];
          } else {
            this.showError = false;
          }
        })
    );
  }

  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }
}
