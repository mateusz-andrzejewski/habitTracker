import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calendarZero',
})
export class CalendarZeroPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): string {
    return value.toString().length >= 2
      ? value.toString()
      : '0' + value.toString();
  }
}
