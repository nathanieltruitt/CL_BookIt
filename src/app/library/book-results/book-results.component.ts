import { Component, OnInit } from '@angular/core';
import { BookshelfService } from 'src/app/bookshelf/bookshelf.service';
import { Book } from 'src/app/shared/book/book.model';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-book-results',
  templateUrl: './book-results.component.html',
  styleUrls: ['./book-results.component.css'],
})
export class BookResultsComponent implements OnInit {
  constructor(
    private libraryService: LibraryService,
    private bookshelfService: BookshelfService
  ) {}

  ngOnInit(): void {}

  onSaveBook(book: Book) {
    this.libraryService.bookSelected$.next(book);
    return this.bookshelfService.saveBook(book);
  }

  onGetBooks() {
    return this.libraryService.bookList$;
  }
}
