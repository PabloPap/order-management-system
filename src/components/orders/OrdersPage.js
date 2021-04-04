import React from 'react';
import { connect } from 'react-redux';
import * as orderActions from '../../redux/actions/orderActions';
import * as statusActions from '../../redux/actions/statusActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import OrderList from './orderList';

class OrdersPage extends React.Component {
  componentDidMount() {
    const { actions, statusAll, orders } = this.props;

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
  }

  render() {
    return (
      <>
        <h2>Orders</h2>
        <OrderList orders={this.props.orders} />
      </>
    );
  }
}

OrdersPage.propTypes = {
  orders: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  statusAll: PropTypes.array.isRequired,
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
