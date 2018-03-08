import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {CartService} from './core/services/cart.service';

@Injectable()
export class GuardService implements CanActivate {

  constructor(private cart: CartService) {
  }

  canActivate() {
    return !this.cart.isEmpty();
  }

}
