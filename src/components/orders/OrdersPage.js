import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as orderActions from '../../redux/actions/orderActions';
import * as statusActions from '../../redux/actions/statusActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import OrderList from './OrderList';
import { Redirect } from 'react-router-dom';
import Spinner from '../shared/Spinner';
import { toast } from 'react-toastify';
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

  const handleDeleteOrder = async (order) => {
    toast.success('Order deleted!');
    try {
      await actions.deleteOrder(order);
    } catch (error) {
      debugger;
      toast.error('Delete failed. ' + error.message, { autoClose: false });
    }
  };

  const [filter, setFilter] = useState('');

  const handleFilterOrder = (e) => {
    setFilter(e.target.value);
  };

  return (
    <>
      {redirectToAddOrderPage && <Redirect to="/order" />}

      <div className="orders">
        <div className="orders__manage">
          <h1 className="orders__title">Manage All Orders</h1>
          <button
            className="orders__button btn btn--primary"
            onClick={() => setRedirectToAddOrderPage(true)}
          >
            Add Order
          </button>
        </div>

        {loading ? (
          <Spinner />
        ) : (
          <>
            {orders.length > 0 ? (
              <OrderList
                orders={orders}
                onDeleteClick={handleDeleteOrder}
                onFilterOrder={handleFilterOrder}
                filter={filter}
              />
            ) : (
              ''
            )}
          </>
        )}
      </div>
    </>
  );
}

OrdersPage.propTypes = {
  orders: PropTypes.array.isRequired,
  statusAll: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

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
