import React from 'react';
import { connect } from 'react-redux';
import * as orderActions from '../../redux/actions/orderActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import OrderList from './orderList';

class OrdersPage extends React.Component {
  componentDidMount() {
    this.props.actions.loadOrders().catch((error) => {
      alert('Loading orders failed' + error);
    });
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
};

function mapStateToProps(state) {
  return {
    orders: state.orders,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(orderActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OrdersPage);
