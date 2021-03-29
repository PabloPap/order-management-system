import * as types from '../actions/actionTypes';

export default function orderReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE__ORDER:
      return [...state, { ...action.order }];
    default:
      return state;
  }
}
