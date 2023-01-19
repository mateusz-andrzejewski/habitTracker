import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentHabitsComponent } from './components/pages/current-habits/current-habits.component';

const routes: Routes = [
  { path: 'current-habits', component: CurrentHabitsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
