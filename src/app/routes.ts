import { Routes } from '@angular/router';

import { BookExistsGuard } from './guards/book-exists';
import { FindBookPageComponent } from './containers/find-book-page';
import { ViewBookPageComponent } from './containers/view-book-page';
import { CollectionPageComponent } from './containers/collection-page';
import { NotFoundPageComponent } from './containers/not-found-page';
import { AboutPageComponent } from './containers/about-page';

export const routes: Routes = [
  {
    path: '',
    component: CollectionPageComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'book/find',
    component: FindBookPageComponent
  },
  {
    path: 'book/:id',
    canActivate: [ BookExistsGuard ],
    component: ViewBookPageComponent
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];
