import { Component, Input, OnInit } from '@angular/core';
import { HabitService } from 'src/app/services/habit.service';
import { Habit } from 'src/app/shared/models/habit';
import { categoryMode } from 'src/app/shared/enums/category-mode';
import { ToastService } from 'src/app/shared/services/toast.service';

@Component({
  selector: 'app-tab-input',
  templateUrl: './tab-input.component.html',
  styleUrls: ['./tab-input.component.scss'],
})
export class TabInputComponent implements OnInit {
  @Input() category!: categoryMode;

  habitsByCategory!: Habit[];

  constructor(
    private _habitService: HabitService,
    private _toastService: ToastService
  ) {}

  ngOnInit(): void {
    this._getHabitsFromCategory();
  }

  private _getHabitsFromCategory() {
    this._habitService.getHabitsFromCategory(this.category).subscribe({
      next: (habitsFromCategory) => {
        this.habitsByCategory = habitsFromCategory;
      },
      error: (err) => {
        this._toastService.showDanger({ text: 'Pobranie nie powiodło się' });
        console.log(err);
      },
    });
  }
}
