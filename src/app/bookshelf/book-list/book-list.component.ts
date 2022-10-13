import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Book } from 'src/app/shared/book/book.model';
import { BookshelfService } from '../bookshelf.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  constructor(private bookshelfService: BookshelfService) {}

  ngOnInit(): void {}

  onGetBooks() {
    return this.bookshelfService.bookList$;
  }

  onRemoveBook(idx: number) {
    this.bookshelfService.removeBook(idx);
  }
}
