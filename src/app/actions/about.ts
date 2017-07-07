import { Action } from '@ngrx/store';
import { About } from '../models/about';

export const LOAD = '[About] Load';
export const LOAD_SUCCESS = '[About] Load Success';
export const LOAD_FAIL = '[About] Load Fail';

export class LoadAction implements Action {
  readonly type = LOAD;
}

export class LoadSuccessAction implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: About) { }
}

export class LoadFailAction implements Action {
  readonly type = LOAD_FAIL;

  constructor(public payload: About) { }
}

export type Actions
  = LoadAction
  | LoadSuccessAction
  | LoadFailAction;
