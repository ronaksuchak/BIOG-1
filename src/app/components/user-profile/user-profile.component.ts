import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/auth/token-storage.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  info: any;

  constructor(private token: TokenStorageService) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
    };
  }

  public changeUserName(info:any){
    this.info = info;
  }

  logout() {
    this.token.signOut();
    //  window.location.reload();
  }

}
