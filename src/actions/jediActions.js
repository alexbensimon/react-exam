// @flow

import { STORE_JEDI_LIST, ADD_JEDI } from './actionTypes';
import { getJedi } from '../api/jediApi';
import type { Jedi } from '../types/jedi';

export function storeJediList(jediList: Jedi[]) {
  return {
    type: STORE_JEDI_LIST,
    payload: jediList,
  };
}

export function fetchJediList() {
  return async (dispatch) => {
    const jediList: Jedi[] = await getJedi();
    dispatch(storeJediList(jediList));
  };
}

export function addJedi(name: string) {
  return {
    type: ADD_JEDI,
    payload: name,
  };
}
