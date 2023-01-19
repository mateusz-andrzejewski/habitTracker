import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HabitService {
  constructor(private _http: HttpClient) {}

  getCurrentHabits(): Observable<any> {
    return this._http.get<any>('url');
  }
}
