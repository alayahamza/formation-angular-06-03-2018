import {Book} from './book';

export class CartRow {

  deleted = false;
  added = true;

  get book(): Book {
    return this._book;
  }
  get quantity(): number {
    return this._quantity;
  }

  static load(json): CartRow {
    return new CartRow(json._book, json._quantity);
  }

  constructor(private _book: Book,
              private _quantity: number) {
    setTimeout(() => {
      this.added = false;
    }, 500);
  }

  amount() {
    return this._book.price * this._quantity;
  }

}
