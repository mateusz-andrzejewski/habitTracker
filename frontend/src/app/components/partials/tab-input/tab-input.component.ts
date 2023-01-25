import { Component, Input, OnInit } from '@angular/core';
import { HabitService } from 'src/app/services/habit.service';
import { Habit } from 'src/app/shared/models/habit';
import { categoryMode } from 'src/app/shared/enums/category-mode';

@Component({
  selector: 'app-tab-input',
  templateUrl: './tab-input.component.html',
  styleUrls: ['./tab-input.component.scss'],
})
export class TabInputComponent implements OnInit {
  @Input() category!: categoryMode;

  habitsFromCategory!: Habit[];

  constructor(private _habitService: HabitService) {}

  ngOnInit(): void {
    this._getHabitsFromCategory();
  }

  private _getHabitsFromCategory() {
    this._habitService.getHabitsFromCategory(this.category).subscribe({
      next: (habitsFromCategory) => {
        this.habitsFromCategory = habitsFromCategory;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
