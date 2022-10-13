import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Book } from '../shared/book/book.model';

@Injectable({
  providedIn: 'root',
})
export class LibraryService {
  bookSelected$ = new Subject<Book>();
  private allBooks: Book[] = [
    new Book(
      'API Book 1',
      'Will Wilder',
      'Mystery',
      'https://source.unsplash.com/50x50/?mystery,book'
    ),
    new Book(
      'API Book 2',
      'Nolan Hovis',
      'Non-Fiction',
      'https://source.unsplash.com/50x50/?serious,book'
    ),
    new Book(
      'API Book 3',
      'German Cruz',
      'Mystery',
      'https://source.unsplash.com/50x50/?mystery,book'
    ),
    new Book(
      'API Book 4',
      'Lex Pryor',
      'Non-Fiction',
      'https://source.unsplash.com/50x50/?serious,book'
    ),
  ];
  bookList$ = new BehaviorSubject<Book[]>(this.allBooks.slice());

  constructor() {}
}
