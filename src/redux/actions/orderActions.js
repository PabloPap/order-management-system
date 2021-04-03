import * as types from './actionTypes';

// Action creator function
export function createOrder(order) {
  return { type: types.CREATE__ORDER, order };
}

const baseUrl = 'http://localhost:3001/orders/';

export function loadOrdersSuccess(orders) {
  return { type: types.LOAD_ORDERS_SUCCESS, orders };
}

export function loadOrders() {
  return function (dispatch) {
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
        // eslint-disable-next-line no-console
        console.error('API call failed. ' + error);
        throw error;
      });
  };
}
