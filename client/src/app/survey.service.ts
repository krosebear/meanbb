import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Survey } from './survey';
import 'rxjs/add/operator/map';

@Injectable()
export class SurveyService {

  constructor(private http: Http) { }
  create(new_survey: Survey) {
    return this.http.post('/create', new_survey).map(data => data.json()).toPromise();
  }
  show_polls() {
    return this.http.get('/show_polls').map(data => data.json()).toPromise();
  }
  vote(id: String) {
    return this.http.get('/vote/' + id).map(data => data.json()).toPromise();
  }
  upvote(option: String, _id: String) {
    return this.http.post('/upvote', option, _id).map(data => data.json()).toPromise();
  }
}
