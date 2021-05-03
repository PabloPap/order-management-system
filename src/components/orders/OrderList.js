import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const OrderList = ({ orders, onDeleteClick }) => (
  <div className="orders__table">
    <table>
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Order_ID</th>
          <th scope="col">Status</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => {
          return (
            <tr key={order.id}>
              <td data-label="Title">
                <Link to={'/order/' + order.slug}>{order.title}</Link>
              </td>
              <td data-label="Order_ID">{order.orderNum}</td>
              <td data-label="Status">{order.orderStatus}</td>
              <td>
                <button
                  className="btn btn--danger"
                  onClick={() => onDeleteClick(order)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);

OrderList.propTypes = {
  orders: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default OrderList;
