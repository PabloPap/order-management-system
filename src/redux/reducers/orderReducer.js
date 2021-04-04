import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function orderReducer(state = initialState.orders, action) {
  switch (action.type) {
    case types.CREATE__ORDER:
      return [...state, { ...action.order }];
    case types.LOAD_ORDERS_SUCCESS:
      return action.orders;
    default:
      return state;
  }
}
