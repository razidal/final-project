const PaymentInfo = require('../models/PaymentInfo');
const Order = require('../models/Order');

// Create a new payment
exports.createPayment = async (req, res) => {
  try {
    const { orderId, amount, paymentMethod } = req.body;
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    const newPaymentInfo = new PaymentInfo({
      paymentId: new mongoose.Types.ObjectId().toString(),
      orderId,
      amount,
      paymentMethod,
      paymentStatus: 'Pending'
    });

    await newPaymentInfo.save();
    res.status(201).json({ message: 'Payment created successfully', paymentInfo: newPaymentInfo });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get payment by ID
exports.getPaymentById = async (req, res) => {
  try {
    const paymentId = req.params.id;
    const paymentInfo = await PaymentInfo.findById(paymentId).populate('orderId');
    if (!paymentInfo) {
      return res.status(404).json({ message: 'Payment not found' });
    }
    res.status(200).json({ paymentInfo });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update payment status
exports.updatePaymentStatus = async (req, res) => {
  try {
    const paymentId = req.params.id;
    const { paymentStatus } = req.body;
    const updatedPaymentInfo = await PaymentInfo.findByIdAndUpdate(paymentId, { paymentStatus }, { new: true });
    if (!updatedPaymentInfo) {
      return res.status(404).json({ message: 'Payment not found' });
    }
    res.status(200).json({ message: 'Payment status updated successfully', paymentInfo: updatedPaymentInfo });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all payments
exports.getAllPayments = async (req, res) => {
  try {
    const payments = await PaymentInfo.find().populate('orderId');
    res.status(200).json({ payments });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a payment by ID
exports.deletePayment = async (req, res) => {
  try {
    const paymentId = req.params.id;
    const deletedPayment = await PaymentInfo.findByIdAndDelete(paymentId);
    if (!deletedPayment) {
      return res.status(404).json({ message: 'Payment not found' });
    }
    res.status(200).json({ message: 'Payment deleted successfully', paymentInfo: deletedPayment });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
