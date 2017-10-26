import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UsersLoginComponent } from './users/users-login/users-login.component';
import { UsersDashboardComponent } from './users/users-dashboard/users-dashboard.component';
import { UserService } from './user.service';
import { SurveyService } from './survey.service';
import { SurveyComponent } from './survey/survey.component';
import { CreateSurveyComponent } from './survey/create-survey/create-survey.component';
import { VoteSurveyComponent } from './users/users-dashboard/vote-survey/vote-survey.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsersLoginComponent,
    UsersDashboardComponent,
    SurveyComponent,
    CreateSurveyComponent,
    VoteSurveyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserService, SurveyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
