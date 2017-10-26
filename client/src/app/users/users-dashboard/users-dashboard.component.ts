import { Component, OnInit, Output } from '@angular/core';
import { User } from './../../user';
import { Survey } from './../../survey';
import { UserService } from './../../user.service';
import { SurveyService } from './../../survey.service';
import { Router } from '@angular/router';
import 'rxjs';
@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrls: ['./users-dashboard.component.css']
})
export class UsersDashboardComponent implements OnInit {
  users: Array<User>;
  surveys: Array<Survey>;
  survey: Array<Survey>;

  constructor(private user_service: UserService, private router: Router, private survey_service: SurveyService) { }

  ngOnInit() {
    this.surveys = [];
    this.survey = [];
    this.user_service.loggedIn()
      .then(user => console.log(user))
      .catch(() => this.router.navigate(['/login']));
    this.user_service.get_all()
      .then(users => this.users = users)
      .catch(err => console.log('get all users error, err'));
    this.survey_service.show_polls()
        .then(surveys => {
          console.log(this.surveys);
          this.surveys = surveys;
        })
        .catch(err => console.log(err, 'error getting polls'));
  }
  // destroy(id) {
  //   this.user_service.destroy(id)
  //     .then(() => {
  //       this.user_service.get_all()
  //         .then(users => this.users = users)
  //         .catch(err => console.log('get all users error, err'));
  //     });
  // }
  vote(id) {
    console.log(id);
    this.survey_service.vote(id)
      .then(survey => {
        this.survey = survey;
      })
      .catch(err => console.log('get poll error', err));
      }
  upvote(option, _id) {
    console.log(option, _id);
    this.survey_service.upvote(option, _id)
      .then(() => console.log('got back to component'))
      .catch(err => console.log('error', err));
  }
  }
