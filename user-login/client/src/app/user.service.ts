import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from './user';
import { Trivia } from './trivia';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  constructor(private http: Http) { }
  login(new_user: User) {
    return this.http.post('/login', new_user).map(data => data.json()).toPromise();
  }
  get_all() {
    return this.http.get('/show_users').map(data => data.json()).toPromise();
  }
  loggedIn() {
    return this.http.get('/loggedIn').map(data => data.json()).toPromise();
  }
  destroy(id) {
    // console.log('user service works');
    console.log(id);
    return this.http.get('/destroy/' + id).map(data => data.json()).toPromise();
  }
  addquestion() {
    console.log('add q service works');
    return this.http.get('/addquestion').map(data => data.json()).toPromise();
  }
  home() {
    console.log('home service works');
    return this.http.get('/dashboard').map(data => data.json()).toPromise();
  }
  play() {
    console.log('play service works');
    return this.http.get('/play').map(data => data.json()).toPromise();
  }
  insertQuestion(new_trivia: Trivia) {
    console.log('insertQuestion service works');
    return this.http.post('/insertQuestion', new_trivia).map(data => data.json()).toPromise();
  }
  // get_qs() {
  //   console.log('got to get qs in service');
  //   return this.http.post('/get_qs').map(data => data.json()).toPromise();
  // }
}
