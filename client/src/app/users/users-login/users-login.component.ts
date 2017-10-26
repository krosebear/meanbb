import { Component, OnInit } from '@angular/core';
import { User } from './../../user';
import { UserService } from './../../user.service';
import { Router } from '@angular/router';
import 'rxjs';

@Component({
  selector: 'app-users-login',
  templateUrl: './users-login.component.html',
  styleUrls: ['./users-login.component.css']
})
export class UsersLoginComponent implements OnInit {
  new_user = new User;
  constructor(private user_service: UserService, private router: Router) { }

  ngOnInit() {
    this.new_user = new User;
  }
  login() {
    this.user_service.login(this.new_user)
      .then(() => this.router.navigate(['/dashboard']))
      .catch(err => console.log('user login error', err));
      return false;
  }

}
