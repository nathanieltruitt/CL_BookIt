import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
