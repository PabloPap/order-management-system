import { createStore } from 'redux';
import rootReducer from './reducers';
import initialState from './reducers/initialState';
import * as orderActions from './actions/orderActions';

it('should handle creating orders', function () {
  // arrange
  const store = createStore(rootReducer, initialState);
  const order = {
    title: 'Power tools',
  };

  // act
  const action = orderActions.createOrderSuccess(order);
  store.dispatch(action);

  // assert
  const createdOrder = store.getState().orders[0];
  expect(createdOrder).toEqual(order);
});
