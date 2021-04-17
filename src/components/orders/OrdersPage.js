import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as orderActions from '../../redux/actions/orderActions';
import * as statusActions from '../../redux/actions/statusActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import OrderList from './OrderList';
import { Redirect } from 'react-router-dom';
import Spinner from '../shared/Spinner';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

function OrdersPage({ actions, statusAll, orders, loading }) {
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

  const MySwal = withReactContent(Swal);

  const handleDeleteOrder = (order) => {
    MySwal.fire({
      title: <p>Order Deleted!</p>,
      icon: 'success',
      timer: 1000,
      toast: true,
      position: 'top-right',
      showConfirmButton: false,
    });

    actions.deleteOrder(order).catch((error) => {
      MySwal.update({ icon: 'error', timer: 4000 });
    });
  };

  return (
    <>
      {redirectToAddOrderPage && <Redirect to="/order" />}
      <h2>Orders</h2>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <button className="" onClick={() => setRedirectToAddOrderPage(true)}>
            Add Order
          </button>
          <OrderList orders={orders} onDeleteClick={handleDeleteOrder} />
        </>
      )}
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
    loading: state.apiCallsInProgress > 0,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadOrders: bindActionCreators(orderActions.loadOrders, dispatch),
      loadStatusAll: bindActionCreators(statusActions.loadStatusAll, dispatch),
      deleteOrder: bindActionCreators(orderActions.deleteOrder, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OrdersPage);
