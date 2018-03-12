import {TestBed} from '@angular/core/testing';

import {CartService} from './cart.service';
import {mockBook1, mockBook2} from '../model/book.spec';
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

  afterEach(() => {
    localStorage.clear();
  });

  // other syntax is better
  // it('should be created', inject([CartService], (service: CartService) => {
  //   expect(service).toBeTruthy();
  // }));

  it('should be created', () => {
    expect(cartService).toBeTruthy();
  });

  it('should add different books on different rows', function () {
    // compare values not references
    expect(cartService.rows).toEqual([]);
    cartService.add(mockBook1);
    cartService.add(mockBook2);
    expect(cartService.rows).toEqual([
      new CartRow(mockBook1, 1),
      new CartRow(mockBook2, 1)
    ]);
  });

  it('should increment quantity if book already in cart', function () {
    expect(cartService.rows).toEqual([]);
    cartService.add(mockBook1);
    cartService.add(mockBook1);
    expect(cartService.rows).toEqual([
      new CartRow(mockBook1, 2),
    ]);
  });

  it('should  remove a row', function () {
    // etat initial
    cartService.add(mockBook1);
    cartService.add(mockBook2);
    expect(cartService.rows).toEqual([
      new CartRow(mockBook1, 1),
      new CartRow(mockBook2, 1)
    ]);
    // removing row
    cartService.remove(new CartRow(mockBook1, 1));
    // etat final
    expect(cartService.rows).toEqual([new CartRow(mockBook2, 1)]);
  });

});
