import React from 'react';
import OrderForm from './OrderForm';
import renderer from 'react-test-renderer';
import { orders, statusAll } from '../../jsonServer/mockData';

it("sets submit button label 'Saving...' when saving is true", () => {
  const tree = renderer.create(
    <OrderForm
      order={orders[0]}
      statusAll={statusAll}
      onSave={jest.fn()}
      onChange={jest.fn()}
      saving
    />,
  );

  expect(tree).toMatchSnapshot();
});

it("sets submit button label 'Save' when saving is false", () => {
  const tree = renderer.create(
    <OrderForm
      order={orders[0]}
      statusAll={statusAll}
      onSave={jest.fn()}
      onChange={jest.fn()}
      saving={false}
    />,
  );

  expect(tree).toMatchSnapshot();
});
