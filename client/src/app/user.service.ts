import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from './user';
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
    console.log(id);
    return this.http.get('/destroy/' + id).map(data => data.json()).toPromise();
  }
}
