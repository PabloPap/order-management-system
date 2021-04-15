import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as orderActions from '../../redux/actions/orderActions';
import * as statusActions from '../../redux/actions/statusActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import OrderList from './OrderList';
import { Redirect, redirect } from 'react-router-dom';
import Spinner from '../shared/Spinner';

function OrdersPage({ actions, statusAll, orders }) {
  const [redirectToAddOrderPage, setRedirectToAddOrderPage] = useState(false);
  useEffect(() => {
    if (orders.length === 0) {
      actions.loadOrders().catch((error) => {
        alert('Loading all status failed' + error);
      });
    }

    if (statusAll.length === 0) {
      actions.loadStatusAll().catch((error) => {
        alert('Loading all status failed' + error);
      });
    }
  }, []);

  return (
    <>
      {redirectToAddOrderPage && <Redirect to="/order" />}
      <h2>Orders</h2>
      <Spinner />
      <button className="" onClick={() => setRedirectToAddOrderPage(true)}>
        Add Order
      </button>
      <OrderList orders={orders} />
    </>
  );
}

function mapStateToProps(state) {
  return {
    orders:
      state.statusAll.length === 0
        ? []
        : state.orders.map((order) => {
            return {
              ...order,
              orderStatus: state.statusAll.find((s) => s.id === order.status)
                .name,
            };
          }),
    statusAll: state.statusAll,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadOrders: bindActionCreators(orderActions.loadOrders, dispatch),
      loadStatusAll: bindActionCreators(statusActions.loadStatusAll, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OrdersPage);
