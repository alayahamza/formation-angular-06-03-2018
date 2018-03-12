import {Component, LOCALE_ID, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {CartService} from '../../core/services/cart.service';
import {UrlService} from '../../core/services/url.service';
import {CartRow} from '../../core/model/cart-row';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-cart-content',
  templateUrl: './cart-content.component.html',
  styleUrls: ['./cart-content.component.css'],
  animations: [
    trigger('cartRow', [
      transition('in => out',
        animate(500,
          style({
            transform: 'scale(0)',
            // opacity: 0,
          })
        )
      ),
      transition('void => new',
        animate(500,
          style({
            transform: 'scale(1)',
            // opacity: 0,
          })
        )
      ),
      state('void',
        style({
          transform: 'scale(0)'
        })
      ),
      transition('in => new',
        animate(500,
          style({
            backgroundColor: 'yellow',
          })
        )
      ),
    ])
  ]
})
export class CartContentComponent implements OnInit {

  constructor(private title: Title,
              public cart: CartService,
              public url: UrlService) { }

  getRowState(row: CartRow) {
    if (row.added) {
      return 'new';
    } else if (row.deleted) {
      return 'out';
    } else {
      return 'in';
    }
  }

  ngOnInit() {
    this.title.setTitle('Panier');
  }

  trackRow(index: number, row: CartRow): string {
    return row.book._id.$oid;
  }

}
