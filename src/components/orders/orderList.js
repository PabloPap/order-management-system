import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const OrderList = ({ orders, onDeleteClick }) => (
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
          <li>{order.orderNum}</li>
          <li>{order.orderStatus}</li>
          <li>
            <button onClick={() => onDeleteClick(order)}>Delete</button>
          </li>
        </ul>
      );
    })}
  </div>
);

OrderList.propTypes = {
  orders: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default OrderList;
