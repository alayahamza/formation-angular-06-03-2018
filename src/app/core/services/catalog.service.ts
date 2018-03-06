import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Book} from '../model/book';

const url = 'https://api.mongolab.com/api/1/databases/sfbooks/collections/sfbooks/';
const apiKey = '?apiKey=d3qvB8ldYFW2KSynHRediqLuBLP8JA8i';

@Injectable()
export class CatalogService {

  constructor(private http: HttpClient) {
  }

  getList(): Observable<Book[]> {
    return this.http.get<Book[]>(url + apiKey);
  }

  getBook(id: string): Observable<Book> {
    return this.http.get<Book>(url + id + apiKey);
  }

}
