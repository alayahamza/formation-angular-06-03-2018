import {Component, Input, OnInit} from '@angular/core';
import {BookPosition} from '../../model/book-position';
import {UrlService} from '../../services/url.service';

@Component({
  selector: 'app-book-navigator',
  templateUrl: './book-navigator.component.html',
  styleUrls: ['./book-navigator.component.css']
})
export class BookNavigatorComponent implements OnInit {

  @Input() position: BookPosition;

  constructor(public url: UrlService) { }

  ngOnInit() {
  }

}
