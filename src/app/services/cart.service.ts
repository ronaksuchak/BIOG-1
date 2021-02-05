import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from '../common/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  storage: Storage = sessionStorage;
  cartObser: Observable<CartItem[]>;
  storageKey = "BIOG_cart";

  constructor() { }

  setCartItem(item: CartItem) {
    let cItem = this.storage.getItem(this.storageKey);
    if (!!cItem) {

    }
    var itemAry = JSON.parse(cItem) || [];
    // itemAry = JSON.parse(cItem);
    console.log(" item ary" + itemAry);
    itemAry.push(item);
    if (cItem !== null || cItem !== undefined) {
      this.storage.setItem(this.storageKey, JSON.stringify(itemAry));
      console.log(JSON.stringify(itemAry));
    }
  }
  getAllCartItem(): Observable<CartItem[]> {
    let temp = new Observable<CartItem[]>(s => {
      var data: CartItem[] = JSON.parse(this.storage.getItem(this.storageKey)) || [];
      s.next(data);
    })
    this.cartObser = temp;
    return this.cartObser;

  }

}
