import { Component } from '@angular/core';

@Component({
  selector: 'app-add-habit',
  templateUrl: './add-habit.component.html',
  styleUrls: ['./add-habit.component.scss'],
})
export class AddHabitComponent {
  showValue(value: any) {
    console.log(value);
  }
}
