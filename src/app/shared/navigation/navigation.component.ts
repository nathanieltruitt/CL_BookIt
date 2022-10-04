import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  @Output() currentPage = new EventEmitter();
  collapsed = true;
  show = false;

  constructor() {}

  ngOnInit(): void {}

  onSelectPage(page: string) {
    // emit the currentPage string up to app component which then stores it in the selectedFeature property.
    // * refer to line 2 on app.component.html
    this.currentPage.emit(page);
  }
}
