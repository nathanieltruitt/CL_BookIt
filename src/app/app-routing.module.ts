import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './bookshelf/book-details/book-details.component';
import { BookshelfHomeComponent } from './bookshelf/bookshelf-home/bookshelf-home.component';
import { BookshelfComponent } from './bookshelf/bookshelf.component';
import { LibraryComponent } from './library/library.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/bookshelf',
    pathMatch: 'full',
  },
  {
    path: 'bookshelf',
    component: BookshelfComponent,
    children: [
      {
        path: '',
        component: BookshelfHomeComponent,
      },
      // {
      //   path: 'new',
      //   component: BookshelfEditorComponent
      // },
      {
        path: ':id',
        component: BookDetailsComponent,
      },
      // {
      //   path: ':id/edit',
      //   component: BookshelfEditorComponent
      // }
    ],
  },
  {
    path: 'library',
    component: LibraryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
