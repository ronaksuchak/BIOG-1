import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'http://localhost:9595/api/test/user';
  private pmUrl = 'http://localhost:9595/api/test/pm';
  private adminUrl = 'http://localhost:9595/api/test/admin';

  constructor(private http: HttpClient) { }

  getUserBoard(): Observable<string> {
    console.log("in u service");
    return this.http.get(this.userUrl, { responseType: 'text' });
  }
 
  getAdminBoard(): Observable<string> {
    return this.http.get(this.adminUrl, { responseType: 'text' });
  }
}
