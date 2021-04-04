import { combineReducers } from 'redux';
import orders from './orderReducer';
import statusAll from './statusReducer';

const rootReducer = combineReducers({
  orders,
  statusAll,
});

export default rootReducer;
