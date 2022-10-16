import { Component, OnInit } from '@angular/core';
import { LibraryService } from 'src/app/library/library.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent implements OnInit {
  constructor(private libraryService: LibraryService) {}

  ngOnInit(): void {
    this.libraryService.bookSelected$.subscribe((data) => {
      alert(`title: ${data.title}\n author: ${data.author}`);
    });
  }
}
