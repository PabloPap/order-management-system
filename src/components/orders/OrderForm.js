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
    <div className="form">
      <form onSubmit={onSave}>
        <h1>{order.id ? 'Edit' : 'Add'} Order</h1>
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
        <div className="form__button">
          <button type="submit" disabled={saving}>
            <span>{saving ? 'Saving...' : 'Save'}</span>
          </button>
        </div>
      </form>
    </div>
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
