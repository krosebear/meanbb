import { Component, OnInit } from '@angular/core';
import { User } from './../user';
import { UserService } from './../user.service';
import { Router } from '@angular/router';
import { Trivia } from './../trivia';
import 'rxjs';

@Component({
  selector: 'app-play-trivia',
  templateUrl: './play-trivia.component.html',
  styleUrls: ['./play-trivia.component.css']
})
export class PlayTriviaComponent implements OnInit {
  curUser: User;
  curTrivia: Trivia;
  constructor(private user_service: UserService, private router: Router) { }
  // let curUser: string;

  ngOnInit() {
    this.user_service.loggedIn()
      .then(user => this.curUser = user)
      .catch(() => this.router.navigate(['/login']));
    // this.user_service.randomQ()
    //     .then(questions => this.curTrivia = questions)
    //     .catch(err => console.log(err, 'randomQ error'));
  }
}
