import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const activeStyle = { color: '#1193F6' };

  return (
    <nav>
      <NavLink to="/" exact activeStyle={activeStyle}>
        Home
      </NavLink>
      <NavLink to="/orders" exact activeStyle={activeStyle}>
        Orders
      </NavLink>
    </nav>
  );
};

export default Header;
