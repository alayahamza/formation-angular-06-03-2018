import { TestBed, inject } from '@angular/core/testing';

import {url, apiKey, CatalogService} from './catalog.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {mockBook1, mockBook2} from '../model/book.spec';

describe('CatalogService', () => {
  let catalog: CatalogService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CatalogService],
      imports: [
        HttpClientTestingModule
      ]
    });
  });
  beforeEach(() => {
    catalog = TestBed.get(CatalogService);
  });

  afterEach(() => {
    const httpMock: HttpTestingController = TestBed.get(HttpTestingController);
    httpMock.verify();
  });

  it('should load a book', (done) => {
    const httpMock: HttpTestingController = TestBed.get(HttpTestingController);
    catalog.getBook(mockBook1._id.$oid)
      .subscribe(bookPos => {
        expect(bookPos).toEqual({
          book: mockBook1,
          previous: undefined,
          next: mockBook2,
          index: 0,
          count: 2
        });
        done();
      });
    httpMock.expectOne(url + apiKey)
      .flush([mockBook1, mockBook2]);
  });

});
