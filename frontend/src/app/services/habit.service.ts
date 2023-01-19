import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { sample_habits } from '../DATA';

@Injectable({
  providedIn: 'root',
})
export class HabitService {
  constructor(private _http: HttpClient) {}

  getCurrentHabits(): Observable<any> {
    // return this._http.get<any>('url');
    return of(sample_habits);
  }
}
