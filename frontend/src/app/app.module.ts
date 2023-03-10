import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { CurrentHabitsComponent } from './components/pages/current-habits/current-habits.component';
import { HabitService } from './services/habit.service';
import { TitleComponent } from './components/partials/title/title.component';
import { TabInputComponent } from './components/partials/tab-input/tab-input.component';
import { CategoryPipe } from './shared/pipes/category.pipe';
import { AddHabitComponent } from './components/pages/add-habit/add-habit.component';
import { HabitTrackerCalendarComponent } from './shared/components/habit-tracker-calendar/habit-tracker-calendar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarZeroPipe } from './shared/pipes/calendar-zero.pipe';
import { HabitTrackerValidationErrorComponent } from './shared/components/habit-tracker-validation-error/habit-tracker-validation-error.component';
import { ToastService } from './shared/services/toast.service';
import { HabitTrackerToastContainerComponent } from './shared/components/habit-tracker-toast-container/habit-tracker-toast-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CurrentHabitsComponent,
    TitleComponent,
    TabInputComponent,
    CategoryPipe,
    AddHabitComponent,
    HabitTrackerCalendarComponent,
    CalendarZeroPipe,
    HabitTrackerValidationErrorComponent,
    HabitTrackerToastContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [HabitService, ToastService],
  bootstrap: [AppComponent],
})
export class AppModule {}
