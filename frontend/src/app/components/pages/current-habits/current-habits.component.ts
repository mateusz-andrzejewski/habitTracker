import { Component, OnInit } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { HabitService } from 'src/app/services/habit.service';
import { displayMode } from 'src/app/shared/enums/display-mode';
import { Habit } from 'src/app/shared/models/habit';

@Component({
  selector: 'app-current-habits',
  templateUrl: './current-habits.component.html',
  styleUrls: ['./current-habits.component.scss'],
})
export class CurrentHabitsComponent implements OnInit {
  currentHabits!: Habit[];
  active = 1;
  displayMode = displayMode;

  constructor(private _habitService: HabitService) {}
  ngOnInit() {
    this._habitService
      .getCurrentHabits()
      .subscribe((currentHabits) => (this.currentHabits = currentHabits));
    console.log(this.currentHabits);
  }
}
