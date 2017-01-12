// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import auth from './auth';
import counter from './counter';

const rootReducer = combineReducers({
  auth,
  counter,
  routing
});

export default rootReducer;
