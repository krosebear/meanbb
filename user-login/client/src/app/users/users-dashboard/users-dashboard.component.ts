import { Component, OnInit } from '@angular/core';
import { User } from './../../user';
import { UserService } from './../../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrls: ['./users-dashboard.component.css']
})
export class UsersDashboardComponent implements OnInit {
  users: Array<User>;


  constructor(private user_service: UserService, private router: Router) { }

  ngOnInit() {
    this.user_service.loggedIn()
      .then(user => console.log(user))
      .catch(() => this.router.navigate(['/login']));
    this.user_service.get_all()
      .then(users => this.users = users)
      .catch(err => console.log('get all users error, err'));
  }
  destroy(id) {
    this.user_service.destroy(id)
      .then(() => {
        this.user_service.get_all()
          .then(users => this.users = users)
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }
  addquestion() {
    this.user_service.addquestion()
      .then(() => this.router.navigate(['/addquestion']))
      .catch(err => console.log('user login error', err));
      return false;
  }
  home() {
    this.user_service.home()
      .then(() => this.router.navigate(['/dashboard']))
      .catch(err => console.log('user login error', err));
      return false;
  }
  play() {
    this.user_service.play()
    .then(data => this.router.navigate(['/play']))
    .catch(err => console.log('user login error', err));
    return false;
  }
}
