import { Component, Input } from '@angular/core';
import { displayMode } from 'src/app/shared/enums/display-mode';

@Component({
  selector: 'app-tab-input',
  templateUrl: './tab-input.component.html',
  styleUrls: ['./tab-input.component.scss'],
})
export class TabInputComponent {
  @Input() displayMode!: displayMode;
}
