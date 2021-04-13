import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as orderActions from '../../redux/actions/orderActions';
import * as statusActions from '../../redux/actions/statusActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import OrderForm from './OrderForm';
import { newOrder } from '../../jsonServer/mockData';

function ManageOrderPage({ actions, statusAll, orders, ...props }) {
  const [order, setOrder] = useState({ ...props.order });
  const [errors, setErrors] = useState({});
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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setOrder((prevOrder) => ({
      ...prevOrder,
      [name]: name === 'statusAll' ? parseInt(value, 10) : value,
    }));
  };

  return (
    <OrderForm
      order={order}
      errors={errors}
      statusAll={statusAll}
      onChange={handleChange}
    />
  );
}

ManageOrderPage.propTypes = {
  order: PropTypes.object.isRequired,
  orders: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  statusAll: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    order: newOrder,
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
