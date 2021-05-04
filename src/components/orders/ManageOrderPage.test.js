import React from 'react';
import { mount } from 'enzyme';
import { statusAll, newOrder, orders } from '../../jsonServer/mockData';
import { ManageOrderPage } from './ManageOrderPage';

function render(args) {
  const defaultProps = {
    statusAll,
    orders,
    history: {},
    saveOrder: jest.fn(),
    loadOrders: jest.fn(),
    loadStatusAll: jest.fn(),
    order: newOrder,
    match: {},
  };

  const props = { ...defaultProps, ...args };

  return mount(<ManageOrderPage {...props} />);
}

it('sets error when attempting to save an empty field', () => {
  const wrapper = render();
  wrapper.find('form').simulate('submit');
  const error = wrapper.find('.alert').first();
  expect(error.text()).toBe('Title is required.');
});
