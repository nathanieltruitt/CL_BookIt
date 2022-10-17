import { Component, OnInit } from '@angular/core';
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
