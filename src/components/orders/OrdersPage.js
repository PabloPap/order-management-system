import React from 'react';
import { connect } from 'react-redux';
import * as orderActions from '../../redux/actions/orderActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

class OrdersPage extends React.Component {
  state = {
    order: {
      title: '',
    },
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.actions.createOrder(this.state.order);
  };

  handleChange = (e) => {
    const order = { ...this.state.order, title: e.target.value };
    this.setState({ order });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Orders</h2>
        <h3>Add Order</h3>
        <div>
          <label>add an order</label>
          <input
            name="order"
            type="text"
            value={this.state.order.title}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit">Save</button>

        {this.props.orders.map((order) => (
          <div key={order.title}>{order.title}</div>
        ))}
      </form>
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
