import {Component, LOCALE_ID, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {CartService} from '../../core/services/cart.service';
import {UrlService} from '../../core/services/url.service';
import {CartRow} from '../../core/model/cart-row';

@Component({
  selector: 'app-cart-content',
  templateUrl: './cart-content.component.html',
  styleUrls: ['./cart-content.component.css'],
})
export class CartContentComponent implements OnInit {

  constructor(private title: Title,
              public cart: CartService,
              public url: UrlService) {
  }

  ngOnInit() {
    this.title.setTitle('Panier');
  }

  trackRow(index: number, row: CartRow) {
    return row.book._id.$oid;
  }
}
