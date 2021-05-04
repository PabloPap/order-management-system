import React from 'react';
import OrderForm from './OrderForm';
import { shallow } from 'enzyme';

function renderOrderForm(args) {
  const defaultProps = {
    statusAll: [],
    order: {},
    saving: false,
    errors: {},
    onSave: () => {},
    onChange: () => {},
  };

  const props = { ...defaultProps, ...args };
  return shallow(<OrderForm {...props} />);
}

it('renders form and header', () => {
  const wrapper = renderOrderForm();
  // console.log(wrapper.debug());
  expect(wrapper.find('form').length).toBe(1);
  expect(wrapper.find('h1').text()).toEqual('Add Order');
});

it('labels save button as "Save" when not saving', () => {
  const wrapper = renderOrderForm();
  expect(wrapper.find('button').text()).toBe('Save');
});

it('labels save button as "Saving" when saving', () => {
  const wrapper = renderOrderForm({ saving: true });
  expect(wrapper.find('button').text()).toBe('Saving...');
});
