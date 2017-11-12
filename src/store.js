// @flow

import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import ReduxLogger from 'redux-logger';

import combinedReducers from './reducers';

export default createStore(combinedReducers, applyMiddleware(ReduxThunk, ReduxLogger));
