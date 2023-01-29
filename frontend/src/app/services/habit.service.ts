import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { sample_habits } from '../DATA';
import { Habit } from '../shared/models/habit';
import { categoryMode } from '../shared/enums/category-mode';

@Injectable({
  providedIn: 'root',
})
export class HabitService {
  constructor(private _http: HttpClient) {}

  getCurrentHabits(): Observable<Habit[]> {
    // return this._http.get<Habit[]>('url');
    return of(sample_habits);
  }

  getHabitsFromCategory(category: string): Observable<Habit[]> {
    if (category === categoryMode.all) return this.getCurrentHabits();
    // return this._http.get<Habit[]>('url');
    return of(
      sample_habits.filter((habit) => {
        return habit.category.includes(category);
      })
    );
  }

  addhabit(habit: Habit): void {
    this._http.post<Habit>('', habit);
  }
}
