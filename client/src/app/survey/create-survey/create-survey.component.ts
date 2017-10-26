import { Component, OnInit } from '@angular/core';
import { User } from './../../user';
import { Survey } from './../../survey';
import { UserService } from './../../user.service';
import { SurveyService } from './../../survey.service';
import { Router } from '@angular/router';
import 'rxjs';

@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.css']
})
export class CreateSurveyComponent implements OnInit {
  new_survey = new Survey;
  surveys: [Survey];

  constructor(private user_service: UserService, private router: Router, private survey_service: SurveyService) { }

  ngOnInit() {
    this.user_service.loggedIn()
      .then(user => console.log(user))
      .catch(() => this.router.navigate(['/login']));
      this.new_survey = new Survey;
    this.survey_service.show_polls()
        .then(surveys => this.surveys)
        .catch(err => console.log(err, 'error getting polls'));
  }
  create() {
    this.survey_service.create(this.new_survey)
      .then(() => this.router.navigate(['/dashboard']))
      .catch(err => console.log('navigating to /create err', err));
      }
}
