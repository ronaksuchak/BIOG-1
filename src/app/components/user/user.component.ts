import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user_service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  board: string;
  errorMessage: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    console.log("up user");
    this.userService.getUserBoard().subscribe(
      
      data => {
        console.log("in user");
        this.board = data;
      },
      error => {
        this.errorMessage = `${error.status}: ${JSON.parse(error.error).message}`;
      }
    );
  }
}
