import { Pipe, PipeTransform } from '@angular/core';
import { calendarDate } from '../components/habit-tracker-calendar/habit-tracker-calendar.component';

@Pipe({
  name: 'calendarZero',
})
export class CalendarZeroPipe implements PipeTransform {
  transform(value: calendarDate, ...args: unknown[]): string {
    return (
      'Wybrano: ' +
      value.year.toString() +
      '-' +
      this._zeroAdder(value.month) +
      '-' +
      this._zeroAdder(value.day)
    );
  }

  private _zeroAdder(value: number): string {
    return value.toString().length >= 2
      ? value.toString()
      : '0' + value.toString();
  }
}
