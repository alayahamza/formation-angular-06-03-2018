import {TestBed} from '@angular/core/testing';

import {ActionService} from './action.service';
import {Router, RouterModule} from '@angular/router';
import {UrlService} from './url.service';
import {CartService} from './cart.service';
import {mockBook1} from '../model/book.spec';


// not to be created manually jasmine does it for you
// class CartServiceMock {
//   add(book: Book) {
//   }
// }
//
// class RouterMock {
//   navigate(commands: any[]) {
//   }
// }

describe('ActionService', () => {
  let action: ActionService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ActionService,
        UrlService,
        {
          provide: CartService, useValue: jasmine.createSpyObj(['add'])
        },
        {
          provide: Router, useFactory: () => {
            const mock = jasmine.createSpyObj(['navigate']);
            mock.navigate.and.returnValue(Promise.resolve(true));
            return mock;
          }
        }
      ],
      imports: [
        RouterModule.forChild([])
      ]
    });
  });
  beforeEach(() => {
    action = TestBed.get(ActionService);
  });

  it('should add book to cart then redirect to the right route', () => {
    action.buyBook(mockBook1);
    const cart = TestBed.get(CartService);
    const router = TestBed.get(Router);
    expect(cart.add).toHaveBeenCalledTimes(1);
    expect(cart.add).toHaveBeenCalledWith(mockBook1);
    expect(router.navigate).toHaveBeenCalledWith(['/cart/content']);
    expect(cart.add).toHaveBeenCalledBefore(router.navigate);
  });
});
