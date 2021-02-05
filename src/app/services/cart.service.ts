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
  data: CartItem[];
  itemCount = 0;

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
      this.data = JSON.parse(this.storage.getItem(this.storageKey)) || [];
      s.next(this.data);
      this.itemCount++;
    })
    this.cartObser = temp;
    return this.cartObser;
  }
  getItemCount(): number {
    return this.itemCount;
  }
  setItemCount(count: number) {
    this.itemCount = count;
  }
}
