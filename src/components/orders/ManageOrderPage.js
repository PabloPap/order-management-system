import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as orderActions from '../../redux/actions/orderActions';
import * as statusActions from '../../redux/actions/statusActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import OrderForm from './OrderForm';
import { newOrder } from '../../jsonServer/mockData';
import Spinner from '../shared/Spinner';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

function ManageOrderPage({ actions, statusAll, orders, history, ...props }) {
  const [order, setOrder] = useState({ ...props.order });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  const MySwal = withReactContent(Swal);

  useEffect(() => {
    if (orders.length === 0) {
      actions.loadOrders().catch((error) => {
        alert('Loading all status failed' + error);
      });
    } else {
      setOrder({ ...props.order });
    }

    if (statusAll.length === 0) {
      actions.loadStatusAll().catch((error) => {
        alert('Loading all status failed' + error);
      });
    }
  }, [props.order]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setOrder((prevOrder) => ({
      ...prevOrder,
      [name]: name === 'status' ? parseInt(value, 10) : value,
    }));
  };

  const handleSave = (event) => {
    event.preventDefault();
    setSaving(true);
    // console.log(order);
    actions
      .saveOrder(order)
      .then(() => {
        MySwal.fire({
          title: <p>Order Saved!</p>,
          icon: 'success',
          timer: 3000,
          toast: true,
          position: 'top-right',
          showConfirmButton: false,
        });
        history.push('/orders');
      })
      .catch((error) => {
        setSaving(false);
        setErrors({ onSave: error.message });
      });
  };

  return orders.length === 0 || statusAll.length === 0 ? (
    <Spinner />
  ) : (
    <OrderForm
      order={order}
      errors={errors}
      statusAll={statusAll}
      onChange={handleChange}
      onSave={handleSave}
      saving={saving}
    />
  );
}

ManageOrderPage.propTypes = {
  order: PropTypes.object.isRequired,
  orders: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  statusAll: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
};

export function getOrderBySlug(orders, slug) {
  return orders.find((order) => order.slug === slug) || null;
}

function mapStateToProps(state, ownProps) {
  const slug = ownProps.match.params.slug;
  const order =
    slug && state.orders.length > 0
      ? getOrderBySlug(state.orders, slug)
      : newOrder;
  return {
    order,
    orders: state.orders,
    statusAll: state.statusAll,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadOrders: bindActionCreators(orderActions.loadOrders, dispatch),
      loadStatusAll: bindActionCreators(statusActions.loadStatusAll, dispatch),
      saveOrder: bindActionCreators(orderActions.saveOrder, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageOrderPage);
