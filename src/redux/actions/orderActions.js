import * as types from './actionTypes';

// Action creator function
// export function createOrder(order) {
//   return { type: types.CREATE_ORDER, order };
// }

export function loadOrdersSuccess(orders) {
  return { type: types.LOAD_ORDERS_SUCCESS, orders };
}

export function updateOrderSuccess(order) {
  return { type: types.UPDATE_ORDER_SUCCESS, order };
}

export function createOrderSuccess(order) {
  return { type: types.CREATE_ORDER_SUCCESS, order };
}

const baseUrl = 'http://localhost:3001/orders/';

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

export function saveOrder(order) {
  return function (dispatch, getState) {
    // console.log(order);
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
        // eslint-disable-next-line no-console
        console.error('API call failed. ' + error);
        throw error;
      });
  };
}
