// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import auth from './auth';
import wallet from './wallet';
import counter from './counter';

const rootReducer = combineReducers({
  auth,
  wallet,
  counter,
  routing
});

export default rootReducer;
