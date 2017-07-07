import 'rxjs/add/operator/let';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as about from '../actions/about';
import * as fromRoot from '../reducers';
import { About } from '../models/about';

@Component({
  selector: 'bc-about-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <md-card>
      <md-card-title>About page</md-card-title>
    </md-card>
    <bc-about-message [about]="about$ | async"></bc-about-message>
  `
})
export class AboutPageComponent {
  about$: Observable<About>;

  constructor(private store: Store<fromRoot.State>) {
    this.about$ = store.select(fromRoot.getAbout);
  }

  ngOnInit() {
    this.store.dispatch(new about.LoadAction());
  }
}
