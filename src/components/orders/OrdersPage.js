import React, { useState } from 'react';

const OrdersPage = () => {
  const [item, setItem] = useState('');
  const [id, setId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(item);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Orders</h2>
      <h3>Add Order</h3>
      <div>
        <label htmlFor="">Country</label>
        <input
          name="item"
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="">Order ID</label>
        <div>
          <input
            type="text"
            name="orderId"
            placeholder=""
            value={id}
            onChange=""
          />
        </div>
      </div>

      <div>
        <label htmlFor="">Status</label>
        <select
          name="name"
          value="value"
          onChange={(e) => setItem(e.target.value)}
        >
          <option value="">Select Status</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default OrdersPage;
