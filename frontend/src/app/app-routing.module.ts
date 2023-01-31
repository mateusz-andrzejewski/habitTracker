import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentHabitsComponent } from './components/pages/current-habits/current-habits.component';
import { AddHabitComponent } from './components/pages/add-habit/add-habit.component';
import { CurrentHabitResolver } from './resolvers/current-habit.resolver';

const routes: Routes = [
  { path: '', redirectTo: 'current-habits', pathMatch: 'full' },
  {
    path: 'current-habits',
    component: CurrentHabitsComponent,
    resolve: { currentHabits: CurrentHabitResolver },
  },
  { path: 'add-habit', component: AddHabitComponent },
  { path: '**', redirectTo: 'current-habits' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
