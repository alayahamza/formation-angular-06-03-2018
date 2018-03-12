// fdescribe to focus on  this test
import {CartRow} from './cart-row';
import {mockBook1, mockBook2} from './book.spec';

describe('CartRoClass', () => {
  it('should compute row amount', () => {
    const row1 = new CartRow(mockBook1, 1);
    expect(row1.amount()).toEqual(10.10);
    const row2 = new CartRow(mockBook1, 2);
    expect(row2.amount()).toEqual(20.20);
    const row3 = new CartRow(mockBook1, 3);
    expect(row3.amount()).toBeCloseTo(30.30);
  });
});
