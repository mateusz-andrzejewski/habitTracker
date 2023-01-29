import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  NgbDateStruct,
  NgbCalendar,
  NgbDatepickerModule,
} from '@ng-bootstrap/ng-bootstrap';

export type calendarDate = {
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
  @Input() formControlCalendar!: string;
  @Input() formCalendar!: any;
}
