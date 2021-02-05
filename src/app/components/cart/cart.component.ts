import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CartItem } from 'src/app/common/cart-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: Observable<CartItem[]>
  constructor(
    private cartService: CartService ,private router : Router
  ) { }

  ngOnInit(): void {
    this.products = this.cartService.getAllCartItem();
  }

  public addToCart(value) {
    let cartItem = new CartItem(value);
    this.cartService.setCartItem(cartItem);
     this.router.navigateByUrl('/shipping')
  }
}
