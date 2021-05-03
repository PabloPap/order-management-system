import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const activeStyle = { color: '#203473' };

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li>
          <NavLink to="/" exact activeStyle={activeStyle}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/orders" exact activeStyle={activeStyle}>
            Orders
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
