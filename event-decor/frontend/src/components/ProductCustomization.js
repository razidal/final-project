import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductCustomization() {
  const [flowers, setFlowers] = useState([]);
  const [decorations, setDecorations] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const flowersResponse = await axios.get('/api/products/flowers');
      const decorationsResponse = await axios.get('/api/products/decorations');
      setFlowers(flowersResponse.data);
      setDecorations(decorationsResponse.data);
    };

    fetchData();
  }, []);

  const addToCart = (item) => {
    setSelectedItems([...selectedItems, item]);
  };

  return (
    <div>
      <h2>Customize Your Products</h2>
      <h3>Flowers</h3>
      <ul>
        {flowers.map((flower) => (
          <li key={flower._id}>
            {flower.type} - {flower.color} - ${flower.price}
            <button onClick={() => addToCart(flower)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      <h3>Buffet Decorations</h3>
      <ul>
        {decorations.map((decoration) => (
          <li key={decoration._id}>
            {decoration.name} - {decoration.theme} - ${decoration.price}
            <button onClick={() => addToCart(decoration)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductCustomization;
