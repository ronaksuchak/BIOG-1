import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CartService } from 'src/app/services/cart.service';
import { TokenStorageService } from 'src/app/services/auth/token-storage.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  itemCount = 0;

  public roles: string[];
  public authority: string;
  
  constructor(
    private breakpointObserver: BreakpointObserver,
    private cartService: CartService,private token: TokenStorageService
  ) {
    this.itemCount = cartService.getItemCount();
    console.log("nav ctor")

  }

  ngOnInit() {
    if (this.token.getToken()) {
      this.roles = this.token.getAuthorities();
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        }
        
        this.authority = 'user';
        return true;
      });
    }
  }

  logout() {
    this.token.signOut();
    window.location.reload();
  }


}
