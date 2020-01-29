import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { nprogress } from 'redux-nprogress';
import { RESET_STORE } from '../constant';

import auth from './auth';
import util from './utils';

const appReducer =  combineReducers({
  routing: routerReducer,
  nprogress,
  auth,
  util
})

const rootReducer = (state, action) => {
  if (action.type === RESET_STORE) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
