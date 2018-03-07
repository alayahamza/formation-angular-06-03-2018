import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Book} from '../model/book';
import {BookPosition} from '../model/book-position';
import {Observable} from 'rxjs/Observable';
import {map, shareReplay} from 'rxjs/operators';

const url = 'https://api.mongolab.com/api/1/databases/sfbooks/collections/sfbooks/';
const apiKey = '?apiKey=d3qvB8ldYFW2KSynHRediqLuBLP8JA8i';

@Injectable()
export class CatalogService {

  list$: Observable<Book[]>;

  constructor(private http: HttpClient) {
    this.load();
    setInterval(() => {
      this.load();
    }, 10 * 1000);
  }

  private load() {
    this.list$ = this.http.get<Book[]>(url + apiKey)
      .pipe(
        shareReplay(1)
      );
  }

  getList(): Observable<Book[]> {
    return this.list$;
  }

  getBook(id: string): Observable<BookPosition> {
    return this.list$
      .pipe(
        map(books => {
          const book = books.filter(b => b._id.$oid === id)[0];
          const index = books.indexOf(book);
          const count = books.length;
          const previous = books[index - 1];
          const next = books[index + 1];
          return {book, previous, next, index, count};
        })
      );
  }

}
