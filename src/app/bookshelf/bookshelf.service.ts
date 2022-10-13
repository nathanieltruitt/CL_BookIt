import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Book } from '../shared/book/book.model';

@Injectable({
  providedIn: 'root',
})
export class BookshelfService {
  bookSelected = new Subject<Book>();
  aWildBook = new Subject();

  private myBooks: Book[] = [
    new Book(
      'Book of Testing',
      'Will Wilder',
      'Mystery',
      'https://source.unsplash.com/50x50/?mystery,book'
    ),
    new Book(
      'Testing Title 2',
      'Nolan Hovis',
      'Science',
      'https://source.unsplash.com/50x50/?science,book'
    ),
    new Book(
      'Fantasy Test',
      'German Cruz',
      'Non-Fiction',
      'https://source.unsplash.com/50x50/?fantasy,book'
    ),
    new Book(
      'Fantasy Test',
      'Lex Pryor',
      'Math',
      'https://source.unsplash.com/50x50/?math,book'
    ),
  ];
  bookList$ = new BehaviorSubject<Book[]>(this.myBooks.slice());

  constructor() {}

  saveBook(book: Book) {
    this.myBooks.push(book);
    this.bookList$.next(this.myBooks.slice());
  }

  removeBook(idx: number) {
    if (idx === -1) return;
    this.myBooks.splice(idx, 1);
    this.bookList$.next(this.myBooks.slice());
  }
}
