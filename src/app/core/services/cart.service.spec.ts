import { TestBed, inject } from '@angular/core/testing';

import { CartService } from './cart.service';
import {mockBook1, mockBook1bis, mockBook2} from '../model/book.spec';
import {CartRow} from '../model/cart-row';

describe('CartService', () => {
  let cartService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartService]
    });
  });
  beforeEach(() => {
    cartService = TestBed.get(CartService);
  });

  afterEach(function() {
    localStorage.clear();
  });

  // it('should be created', inject([CartService], (service: CartService) => {
  //   expect(service).toBeTruthy();
  // }));

  it('should be created', () => {
    expect(cartService).toBeTruthy();
  });

  it('should add different books on different rows', () => {
    expect(cartService.rows).toEqual([]);
    cartService.add(mockBook1);
    cartService.add(mockBook2);
    expect(cartService.rows).toEqual([
      new CartRow(mockBook1, 1),
      new CartRow(mockBook2, 1),
    ]);
  });

  it('should increment quantity if book already in cart', () => {
    expect(cartService.rows).toEqual([]);
    cartService.add(mockBook1);
    cartService.add(mockBook1);
    cartService.add(mockBook1bis);
    expect(cartService.rows).toEqual([
      new CartRow(mockBook1, 3),
    ]);
  });

  it('should remove a row', () => {
    // Etat initial
    cartService.add(mockBook1);
    cartService.add(mockBook2);
    expect(cartService.rows).toEqual([
      new CartRow(mockBook1, 1),
      new CartRow(mockBook2, 1),
    ]);
    // Action
    // cartService.remove(cartService.rows[0]);
    cartService.remove(new CartRow(mockBook1, 1));
    // Etat final
    expect(cartService.rows).toEqual([
      new CartRow(mockBook2, 1),
    ]);
  });

});
