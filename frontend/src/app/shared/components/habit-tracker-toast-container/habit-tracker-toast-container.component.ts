import { Component } from '@angular/core';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-habit-tracker-toast-container',
  templateUrl: './habit-tracker-toast-container.component.html',
  styleUrls: ['./habit-tracker-toast-container.component.scss'],
  host: {
    class: 'teast-container position-fixed top-0 end-0 p-3',
    style: 'z-index: 1200',
  },
})
export class HabitTrackerToastContainerComponent {
  constructor(public toastService: ToastService) {}
}
