import {Injectable} from '@angular/core';
import {Book} from '../model/book';
import {CartService} from './cart.service';
import {Router} from '@angular/router';
import {UrlService} from './url.service';

@Injectable()
export class ActionService {

  constructor(private cart: CartService,
              private router: Router,
              private url: UrlService) { }

  buyBook(book: Book) {
    this.cart.add(book);
    this.router.navigate(this.url.cartContent());
  }

  orderCart(){
    this.router.navigate(this.url.cartOrder());
  }
}
