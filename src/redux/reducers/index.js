import { combineReducers } from 'redux';
import orders from './orderReducer';
import statusAll from './statusReducer';
import apiCallsInProgress from './apiStatusReducer';

const rootReducer = combineReducers({
  orders,
  statusAll,
  apiCallsInProgress,
});

export default rootReducer;
