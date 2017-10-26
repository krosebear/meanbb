import { Component, OnInit, Input } from '@angular/core';
import { Survey } from './../../../survey';
import { SurveyService } from './../../../survey.service';

@Component({
  selector: 'app-vote-survey',
  templateUrl: './vote-survey.component.html',
  styleUrls: ['./vote-survey.component.css']
})

export class VoteSurveyComponent implements OnInit {
  @Input() mySurvey;

  constructor(private survey_service: SurveyService) { }

  ngOnInit() {
  }

}
