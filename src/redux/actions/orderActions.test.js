import * as orderActions from './orderActions';
import * as types from './actionTypes';
import { orders } from '../../jsonServer/mockData';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';

// test an async action
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  describe('Load Orders Thunk', () => {
    it('should create BEGIN_API_CALL and LOAD_ORDER_SUCCESS when loading orders', () => {
      fetchMock.mock('*', {
        body: orders,
        headers: { 'content-type': 'application/json' },
      });

      const expectedActions = [
        { type: types.BEGIN_API_CALL },
        { type: types.LOAD_ORDERS_SUCCESS, orders },
      ];

      const store = mockStore({ orders: [] });
      return store.dispatch(orderActions.loadOrders()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});

describe('createOrderSuccess', () => {
  it('should create a CREATE_ORDER_SUCCESS action', () => {
    const order = orders[0];
    const expectedAction = {
      type: types.CREATE_ORDER_SUCCESS,
      order,
    };

    const action = orderActions.createOrderSuccess(order);

    expect(action).toEqual(expectedAction);
  });
});
