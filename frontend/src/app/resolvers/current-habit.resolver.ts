import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Habit } from '../shared/models/habit';
import { HabitService } from '../services/habit.service';

@Injectable({
  providedIn: 'root',
})
export class CurrentHabitResolver implements Resolve<Habit[]> {
  constructor(private _habitService: HabitService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Habit[]> {
    return this._habitService.getCurrentHabits();
  }
}
