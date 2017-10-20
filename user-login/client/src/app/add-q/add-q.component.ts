import { Component, OnInit } from '@angular/core';
import { User } from './../user';
import { Trivia } from './../trivia';
import { Router } from '@angular/router';
import { UserService } from './../user.service';
import 'rxjs';

@Component({
  selector: 'app-add-q',
  templateUrl: './add-q.component.html',
  styleUrls: ['./add-q.component.css']
})
export class AddQComponent implements OnInit {
  new_trivia = new Trivia;
  constructor(private user_service: UserService, private router: Router) { }

  ngOnInit() {
    this.new_trivia = new Trivia;
    this.user_service.loggedIn()
      .then(user => console.log(user))
      .catch(() => this.router.navigate(['/login']));
  }
  insertQuestion() {
    console.log('insert question fired');
    this.user_service.insertQuestion(this.new_trivia)
    .then(() => this.router.navigate(['/dashboard']))
    .catch(err => console.log('user redirect error', err));
    return false;
  }

}
