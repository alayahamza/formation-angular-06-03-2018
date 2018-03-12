import {Injectable} from '@angular/core';
import {CartRow} from '../model/cart-row';
import {Book} from '../model/book';
import {ReduceUtil} from '../util/reduce-util';

const storageKey = 'cart-rows';

@Injectable()
export class CartService {

  private _rows: CartRow[] = [];
  get rows() {
    return [...this._rows];
  }

  constructor() {
    this.load();
  }

  private save() {
    localStorage.setItem(storageKey, JSON.stringify(this._rows));
  }

  private load() {
    const json = localStorage.getItem(storageKey);
    if (json) {
      this._rows = JSON.parse(json)
        .map(jsonRow => CartRow.load(jsonRow));
    }
  }

  private findRow(rowOrBook: CartRow | Book): { row: CartRow, index: number } {
    const book: Book = rowOrBook instanceof CartRow ? rowOrBook.book : rowOrBook;
    const id = book._id.$oid;
    let row, index;
    this._rows.forEach((r, i) => {
      if (r.book._id.$oid === id) {
        row = r;
        index = i;
      }
    });
    return {row, index};
  }

  add(book: Book) {
    const {row: found} = this.findRow(book);
    if (found) {
      this.updateQuantity(found, found.quantity + 1);
    } else {
      this._rows = [...this._rows, new CartRow(book, 1)];
      this.save();
    }
  }

  remove(row: CartRow) {
    const {row: found} = this.findRow(row);
    row.deleted = true;
    setTimeout(() => {
      this._rows = this._rows.filter(r => r !== found);
      this.save();
    }, 450);

  }

  updateQuantity(row, newQantity) {
    const {row: found, index} = this.findRow(row);
    if (found) {
      this._rows[index] = new CartRow(found.book, newQantity);
      this.save();
    }
  }

  isEmpty() {
    return this._rows.length === 0;
  }

  count() {
    return this._rows
      .map(row => row.quantity)
      .reduce(ReduceUtil.total, 0);
  }

  total() {
    return this._rows
      .map(row => row.amount())
      .reduce(ReduceUtil.total, 0);
  }
}

