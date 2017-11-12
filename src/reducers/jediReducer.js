// @flow

import { STORE_JEDI_LIST, ADD_JEDI } from '../actions/actionTypes';
import type { Jedi } from '../types/jedi';

export default function jediReducer(state: Jedi[] = [], action: { type: string, payload: any }) {
  switch (action.type) {
    case STORE_JEDI_LIST:
      return [...state, ...action.payload];

    case ADD_JEDI:
      return [...state, { id: state.length + 1, name: action.payload }];

    default:
      return state;
  }
}
