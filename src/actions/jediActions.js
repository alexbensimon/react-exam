// @flow

import { STORE_JEDI_LIST } from './actionTypes';
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
