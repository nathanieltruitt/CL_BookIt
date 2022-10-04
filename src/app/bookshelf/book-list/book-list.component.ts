import { Component, EventEmitter, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/book/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  myBooks: Book[] = [
    new Book(
      'Book of Testing',
      'Nathan Truitt',
      'Mystery',
      'https://source.unsplash.com/50x50/?mystery,book'
    ),
  ];
  currentSelectedBook = new EventEmitter<Book>();

  constructor() {}

  ngOnInit(): void {}

  handleBookSelected(book: Book) {
    this.currentSelectedBook.emit(book);
  }
}
