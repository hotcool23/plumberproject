import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import mobileReducer from './mobile';
import authReducer from './auth';

export default combineReducers({
  router: routerReducer,
  mobile: mobileReducer,
  auth: authReducer
});
