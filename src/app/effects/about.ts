import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';

import * as about from '../actions/about';
import { AboutService } from '../services/about';

@Injectable()
export class AboutEffects {
  @Effect()
  loadAbout$: Observable<Action> = this.actions$
    .ofType(about.LOAD)
    .switchMap(() => {
      return this.aboutService.getAbout()
        .map(message => new about.LoadSuccessAction(message))
        .catch(error => of(new about.LoadFailAction(error)));
    });

  constructor(private actions$: Actions, private aboutService: AboutService) {}
}
