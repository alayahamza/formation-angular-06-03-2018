import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Book} from '../model/book';
import {BookPosition} from '../model/book-position';
import {map} from 'rxjs/operators';

const url = 'https://api.mongolab.com/api/1/databases/sfbooks/collections/sfbooks/';
const apiKey = '?apiKey=d3qvB8ldYFW2KSynHRediqLuBLP8JA8i';

@Injectable()
export class CatalogService {

  constructor(private http: HttpClient) { }

  getList(): Observable<Book[]> {
      return this.http.get<Book[]>(url + apiKey);
  }
/*  getBook(id: string): Observable<Book> {
    return this.http.get<Book>(url + id + apiKey);
  }*/
getBook(id: string): Observable<BookPosition> {
  return this.getList()
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
