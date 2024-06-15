import React from 'react';
import { Link } from 'react-router-dom';

function ShoppingCart({ selectedItems }) {
  const calculateTotal = () => {
    return selectedItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {selectedItems.map((item, index) => (
          <li key={index}>
            {item.type || item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <h3>Total: ${calculateTotal()}</h3>
      <Link to="/checkout">
        <button>Proceed to Checkout</button>
      </Link>
    </div>
  );
}

export default ShoppingCart;
