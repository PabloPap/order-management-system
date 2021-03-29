import * as types from './actionTypes';

// Action creator function

export function createOrder(order) {
  return { type: types.CREATE__ORDER, order };
}
