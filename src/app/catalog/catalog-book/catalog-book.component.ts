import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Book} from '../../core/model/book';
import {Observable} from 'rxjs/Observable';
import {CatalogService} from '../../core/services/catalog.service';
import {switchMap, tap} from 'rxjs/operators';
import {Title} from '@angular/platform-browser';
import {BookPosition} from '../../core/model/book-position';

@Component({
  selector: 'app-catalog-book',
  templateUrl: './catalog-book.component.html',
  styleUrls: ['./catalog-book.component.css']
})
export class CatalogBookComponent implements OnInit {

  bookPosition$: Observable<BookPosition>;

  constructor(private route: ActivatedRoute,
              private catalog: CatalogService,
              private title: Title) { }

  ngOnInit() {
    this.bookPosition$ = this.route.params
      .pipe(
        switchMap(params => this.catalog.getBook(params.id)),
        tap(bookPos => this.title.setTitle('Livre' + bookPos.book.title))
      );
  }

}
