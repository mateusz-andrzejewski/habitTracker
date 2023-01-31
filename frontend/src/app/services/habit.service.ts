import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { sample_habits } from '../DATA';
import { Habit } from '../shared/models/habit';
import { categoryMode } from '../shared/enums/category-mode';
import {
  ADD_HABIT_URL,
  CURRENT_HABITS_URL,
  HABITS_BY_CATEGORY_URL,
  HABITS_BY_ID_URL,
  HABITS_URL,
} from '../shared/constants/urls';

@Injectable({
  providedIn: 'root',
})
export class HabitService {
  constructor(private _http: HttpClient) {}

  getCurrentHabits(): Observable<Habit[]> {
    return this._http.get<Habit[]>(CURRENT_HABITS_URL);
  }

  getHabitsFromCategory(category: string): Observable<Habit[]> {
    if (category === categoryMode.all) return this.getCurrentHabits();
    return this._http.get<Habit[]>(HABITS_BY_CATEGORY_URL + category);
  }

  getHabitById(id: number): Observable<Habit> {
    return this._http.get<Habit>(HABITS_BY_ID_URL + id);
  }

  addhabit(habit: any): Observable<any> {
    return this._http.post<any>(ADD_HABIT_URL, habit);
  }
}
