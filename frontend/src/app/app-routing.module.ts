import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentHabitsComponent } from './components/pages/current-habits/current-habits.component';

const routes: Routes = [
  { path: '', redirectTo: 'current-habits', pathMatch: 'full' },
  { path: 'current-habits', component: CurrentHabitsComponent },
  { path: '**', redirectTo: 'current-habits' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
