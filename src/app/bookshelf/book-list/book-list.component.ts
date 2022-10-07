import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Book } from 'src/app/shared/book/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  @Output() selectedBook = new EventEmitter<Book>();
  myBooks: Book[] = [
    new Book(
      'Book of Testing',
      'Nathan Truitt',
      'Mystery',
      'https://source.unsplash.com/50x50/?mystery,book'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}

  handleBookSelected(chosenBook: Book) {
    this.selectedBook.emit(chosenBook);
  }
}
