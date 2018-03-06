import {Book} from './book';

export interface BookPosition {
  book: Book;
  previous?: Book;
  next?: Book;
  index: number;
  count: number;
}
