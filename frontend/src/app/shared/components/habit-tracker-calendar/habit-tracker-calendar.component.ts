import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  NgbDateStruct,
  NgbCalendar,
  NgbDatepickerModule,
} from '@ng-bootstrap/ng-bootstrap';

type calendarDate = {
  year: number;
  month: number;
  day: number;
};

@Component({
  selector: 'habit-tracker-calendar',
  templateUrl: './habit-tracker-calendar.component.html',
  styleUrls: ['./habit-tracker-calendar.component.scss'],
})
export class HabitTrackerCalendarComponent {
  @Output() selectedCalendarDate = new EventEmitter<calendarDate>();
  date!: calendarDate;

  emitCalendarValue() {
    this.selectedCalendarDate.emit(this.date);
  }
}
