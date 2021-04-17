import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function orderReducer(state = initialState.orders, action) {
  switch (action.type) {
    case types.CREATE_ORDER_SUCCESS:
      return [...state, { ...action.order }];
    case types.UPDATE_ORDER_SUCCESS:
      return state.map((order) =>
        order.id === action.order.id ? action.order : order,
      );
    case types.LOAD_ORDERS_SUCCESS:
      return action.orders;
    case types.DELETE_ORDER_OPTIMISTIC:
      return state.filter((order) => order.id !== action.order.id);
    default:
      return state;
  }
}
