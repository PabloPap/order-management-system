import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as orderActions from '../../redux/actions/orderActions';
import * as statusActions from '../../redux/actions/statusActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

function ManageOrderPage({ actions, statusAll, orders }) {
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
      <h2>Manage Order</h2>
    </>
  );
}

ManageOrderPage.propTypes = {
  orders: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  statusAll: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    orders: state.orders,
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

export default connect(mapStateToProps, mapDispatchToProps)(ManageOrderPage);
