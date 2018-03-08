import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {catchError, map} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';

const url = 'https://restcountries.eu/rest/v2/name/';

interface Country {
  translations: {
    fr: string
  };
}

@Injectable()
export class CountryService {

  constructor(private http: HttpClient) {
  }

  search(name: string): Observable<string[]> {
    name = name && name.trim();
    if (name) {
      return this.http.get<Country[]>(url + name)
        .pipe(
          map(countries => countries.map(country => country.translations.fr)),
          catchError(error => of([]))
        );
    }

    return of([]);
  }
}
