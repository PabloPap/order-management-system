import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const OrderList = ({ orders }) => (
  <div className="orders">
    <ul className="orders__header">
      <li>Title</li>
      <li>Order_ID</li>
      <li>Status</li>
    </ul>
    {orders.map((order) => {
      return (
        <ul className="orders__list" key={order.id}>
          <li>
            <Link to={'/order/' + order.slug}>{order.title}</Link>
          </li>
          <li>{order.orderId}</li>
          <li>{order.status}</li>
        </ul>
      );
    })}
  </div>
);

OrderList.propTypes = {
  orders: PropTypes.array.isRequired,
};

export default OrderList;
