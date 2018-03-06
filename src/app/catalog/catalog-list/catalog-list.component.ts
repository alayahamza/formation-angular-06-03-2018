import { Component, OnInit } from '@angular/core';
import {CatalogService} from '../../core/services/catalog.service';
import {Observable} from 'rxjs/Observable';
import {Book} from '../../core/model/book';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.css']
})
export class CatalogListComponent implements OnInit {

  catalog$: Observable<Book[]>;
  constructor(private catalog: CatalogService, private title: Title) { }

  ngOnInit() {
    this.catalog$ = this.catalog.getList();
    this.title.setTitle('Catalogue des livres');
  }

}
