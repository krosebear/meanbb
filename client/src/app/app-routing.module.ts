import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersLoginComponent } from './users/users-login/users-login.component';
import { UsersDashboardComponent } from './users/users-dashboard/users-dashboard.component';
import { SurveyComponent } from './survey/survey.component';
import { CreateSurveyComponent } from './survey/create-survey/create-survey.component';
import { VoteSurveyComponent } from './users/users-dashboard/vote-survey/vote-survey.component';

const routes: Routes = [
  { path: 'login', component: UsersLoginComponent },
  { path: 'dashboard', component: UsersDashboardComponent },
  { path: 'vote', component: VoteSurveyComponent },
  { path: 'createPoll', component: CreateSurveyComponent },
  { path: '**', redirectTo: '/login' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
