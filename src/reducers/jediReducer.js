// @flow

import { STORE_JEDI_LIST } from '../actions/actionTypes';
import type { Jedi } from '../types/jedi';

export default function jediReducer(state: Jedi[] = [], action: { type: string, payload: any }) {
  switch (action.type) {
    case STORE_JEDI_LIST:
      return [...state, ...action.payload];

    default:
      return state;
  }
}
