const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
  const { user, items, totalAmount } = req.body;

  try {
    const order = new Order({ user, items, totalAmount });
    await order.save();
    res.json(order);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// More order controller methods like update, get, delete etc.
