import { Component, OnInit } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { HabitService } from 'src/app/services/habit.service';

@Component({
  selector: 'app-current-habits',
  templateUrl: './current-habits.component.html',
  styleUrls: ['./current-habits.component.scss'],
})
export class CurrentHabitsComponent implements OnInit {
  currentHabits!: any;
  active = 1;

  constructor(private _habitService: HabitService) {}
  // do zrobineia model / interface dla nawyków
  ngOnInit() {
    this._habitService
      .getCurrentHabits()
      .subscribe((currentHabits) => (this.currentHabits = currentHabits));
    console.log(this.currentHabits);
  }
}
