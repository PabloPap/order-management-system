import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';

it('contains 2 NavLinks via shallow', () => {
  const numLinks = shallow(<Header />).find('NavLink').length;
  expect(numLinks).toEqual(2);
});
