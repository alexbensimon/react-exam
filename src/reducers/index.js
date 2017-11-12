// @flow

import { combineReducers } from 'redux';

import jediReducer from './jediReducer';

export default combineReducers({
  jedi: jediReducer,
});
