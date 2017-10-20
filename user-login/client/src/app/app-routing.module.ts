import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersLoginComponent } from './users/users-login/users-login.component';
import { UsersDashboardComponent } from './users/users-dashboard/users-dashboard.component';
import { PlayTriviaComponent } from './play-trivia/play-trivia.component';
import { AddQComponent } from './add-q/add-q.component';

const routes: Routes = [
  { path: 'login', component: UsersLoginComponent },
  { path: 'dashboard', component: UsersDashboardComponent },
  { path: 'play', component: PlayTriviaComponent },
  { path: 'addquestion', component: AddQComponent },
  { path: '**', redirectTo: '/login' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
