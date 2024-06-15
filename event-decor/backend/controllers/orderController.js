const Order = require('../models/Order');
const User = require('../models/User');
const PaymentInfo = require('../models/PaymentInfo');

// Create a new order
exports.createOrder = async (req, res) => {
  try {
    const { userId, items, totalAmount, paymentInfo } = req.body;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const newPaymentInfo = new PaymentInfo(paymentInfo);
    await newPaymentInfo.save();

    const newOrder = new Order({
      user: userId,
      items,
      totalAmount,
      status: 'Pending',
      paymentInfo: newPaymentInfo._id
    });

    await newOrder.save();
    res.status(201).json({ message: 'Order created successfully', order: newOrder });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get an order by ID
exports.getOrderById = async (req, res) => {
  try {
    const orderId = req.params.id;
    const order = await Order.findById(orderId).populate('user').populate('items.product').populate('paymentInfo');
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.status(200).json({ order });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all orders
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('user').populate('items.product').populate('paymentInfo');
    res.status(200).json({ orders });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an order by ID
exports.updateOrder = async (req, res) => {
  try {
    const orderId = req.params.id;
    const updatedOrder = await Order.findByIdAndUpdate(orderId, req.body, { new: true });
    if (!updatedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.status(200).json({ message: 'Order updated successfully', order: updatedOrder });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an order by ID
exports.deleteOrder = async (req, res) => {
  try {
    const orderId = req.params.id;
    const deletedOrder = await Order.findByIdAndDelete(orderId);
    if (!deletedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.status(200).json({ message: 'Order deleted successfully', order: deletedOrder });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
