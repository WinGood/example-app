import * as about from '../actions/about';
import { About } from '../models/about';

export interface State {
  loaded: boolean;
  loading: boolean;
  about: About
};

const initialState: State = {
  loaded: false,
  loading: false,
  about: null
};

export function reducer(state = initialState, action: about.Actions): State {
  switch (action.type) {
    case about.LOAD: {
      return Object.assign({}, state, {
        loading: true
      });
    }

    case about.LOAD_SUCCESS: {
      const about = action.payload;

      return {
        loaded: true,
        loading: false,
        about: about
      };
    }

    default:
      return state;
  }
}

export const getAbout = (state: State) => state.about;
