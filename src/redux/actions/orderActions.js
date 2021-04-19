import * as types from './actionTypes';
import { beginApiCall, apiCallError } from './apiStatusActions';

export function loadOrdersSuccess(orders) {
  return { type: types.LOAD_ORDERS_SUCCESS, orders };
}

export function updateOrderSuccess(order) {
  return { type: types.UPDATE_ORDER_SUCCESS, order };
}

export function createOrderSuccess(order) {
  return { type: types.CREATE_ORDER_SUCCESS, order };
}

export function deleteOrderOptimistic(order) {
  return { type: types.DELETE_ORDER_OPTIMISTIC, order };
}

const baseUrl = 'http://localhost:3001/orders/';

export function loadOrders() {
  return function (dispatch) {
    dispatch(beginApiCall());

    return fetch(baseUrl)
      .then(async (response) => {
        if (response.ok) return response.json();
        if (response.status === 400) {
          const error = await response.text();
          throw new Error(error);
        }
        throw new Error('Network response was not ok.');
      })
      .then((orders) => {
        dispatch(loadOrdersSuccess(orders));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function saveOrder(order) {
  return function (dispatch, getState) {
    dispatch(beginApiCall());

    return fetch(baseUrl + (order.id || ''), {
      // POST for create, PUT to update when id already exists.
      method: order.id ? 'PUT' : 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(order),
    })
      .then(async (response) => {
        if (response.ok) return response.json();
        if (response.status === 400) {
          const error = await response.text();
          throw new Error(error);
        }
        throw new Error('Network response was not ok.');
      })
      .then((savedOrder) => {
        order.id
          ? dispatch(updateOrderSuccess(savedOrder))
          : dispatch(createOrderSuccess(savedOrder));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function deleteOrder(order) {
  return function (dispatch) {
    // optimistic delete, not dispatching api call actions
    // since we are not showing loading status for this
    dispatch(deleteOrderOptimistic(order));
    return fetch(baseUrl + order.id, { method: 'DELETE' })
      .then(async (response) => {
        if (response.ok) return response.json();
        if (response.status === 400) {
          const error = await response.text();
          throw new Error(error);
        }
        throw new Error('Network response was not ok.');
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
