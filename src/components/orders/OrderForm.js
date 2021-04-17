import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../shared/TextInput';
import SelectInput from '../shared/SelectInput';

const OrderForm = ({
  order,
  statusAll,
  onSave,
  onChange,
  saving = false,
  errors = {},
}) => {
  return (
    <form onSubmit={onSave}>
      <h2>{order.id ? 'Edit' : 'Add'} Order</h2>
      {errors.onSave && <p>{errors.onSave}</p>}
      <TextInput
        name="title"
        label="Title"
        value={order.title || ''}
        onChange={onChange}
        error={errors.title}
      />
      <TextInput
        name="orderNum"
        label="Order ID"
        value={order.orderNum || ''}
        onChange={onChange}
        error={errors.orderNum}
      />
      <SelectInput
        name="status"
        label="Status"
        value={order.status || ''}
        defaultOption="Select Status"
        options={statusAll.map((status) => ({
          value: status.id,
          text: status.name,
        }))}
        onChange={onChange}
        error={errors.status}
      />

      <button type="submit" disabled={saving}>
        {saving ? 'Saving...' : 'Save'}
      </button>
    </form>
  );
};

OrderForm.propTypes = {
  statusAll: PropTypes.array.isRequired,
  order: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
};

export default OrderForm;
