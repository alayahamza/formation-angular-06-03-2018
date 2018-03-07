import {Injectable} from '@angular/core';
import {Book} from '../model/book';

@Injectable()
export class UrlService {

  catalogList() {
    return ['/catalog/list'];
  }

  catalogBook(book: Book) {
    return ['/catalog/book', book._id.$oid];
  }

  cartContent() {
    return ['/cart/content'];
  }

  cartOrder() {
    return ['/cart/order'];
  }

  cartReactive() {
    return ['/cart/reactive'];
  }
}
