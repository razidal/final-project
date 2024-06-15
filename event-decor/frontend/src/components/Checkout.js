import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Checkout({ selectedItems, user }) {
  const history = useHistory();

  const handleCheckout = async () => {
    const order = {
      user: user._id,
      items: selectedItems.map(item => ({ product: item._id, productModel: item.type ? 'Flower' : 'BuffetDecoration', quantity: 1 })),
      totalAmount: selectedItems.reduce((total, item) => total + item.price, 0),
    };

    await axios.post('/api/orders', order);
    history.push('/');
  };

  return (
    <div>
      <h2>Checkout</h2>
      <button onClick={handleCheckout}>Confirm Order</button>
    </div>
  );
}

export default Checkout;
