import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { HabitService } from 'src/app/services/habit.service';
import { categoryMode } from 'src/app/shared/enums/category-mode';
import { Habit } from 'src/app/shared/models/habit';

@Component({
  selector: 'app-current-habits',
  templateUrl: './current-habits.component.html',
  styleUrls: ['./current-habits.component.scss'],
})
export class CurrentHabitsComponent implements OnInit {
  currentHabits!: Habit[];
  active = 1;
  categoryMode = categoryMode;

  constructor(
    private _habitService: HabitService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {}
  ngOnInit() {
    this.currentHabits = this._activatedRoute.snapshot.data['currentHabits'];
  }

  navigateToAddHabitForm() {
    this._router.navigateByUrl('add-habit');
  }
}
