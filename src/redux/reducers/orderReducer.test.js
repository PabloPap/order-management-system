import orderReducer from './orderReducer';
import * as actions from '../actions/orderActions';

it('should add order when passed CREATE_ORDER_SUCCESS', () => {
  // arrange
  const initialState = [
    {
      title: 'A',
    },
    {
      title: 'B',
    },
  ];

  const newOrder = {
    title: 'C',
  };

  const action = actions.createOrderSuccess(newOrder);

  // act
  const newState = orderReducer(initialState, action);

  // assert
  expect(newState.length).toEqual(3);
  expect(newState[0].title).toEqual('A');
  expect(newState[1].title).toEqual('B');
  expect(newState[2].title).toEqual('C');
});

it('should update order when passed UPDATE_ORDER_SUCCESS', () => {
  // arrange
  const initialState = [
    {
      id: 1,
      title: 'A',
    },
    {
      id: 2,
      title: 'B',
    },
    {
      id: 3,
      title: 'C',
    },
  ];

  const order = {
    id: 2,
    title: 'New Title',
  };

  const action = actions.updateOrderSuccess(order);

  // act
  const newState = orderReducer(initialState, action);
  const updatedOrder = newState.find((a) => a.id == order.id);
  const untouchedOrder = newState.find((a) => a.id == 1);

  // assert
  expect(updatedOrder.title).toEqual('New Title');
  expect(untouchedOrder.title).toEqual('A');
  expect(newState.length).toEqual(3);
});
