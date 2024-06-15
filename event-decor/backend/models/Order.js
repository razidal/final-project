const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new mongoose.Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  items: [{ type: Schema.Types.ObjectId, ref: 'ShoppingCartItem', required: true }],
  totalAmount: { type: Number, required: true },
  status: { type: String, required: true }
});

OrderSchema.methods = {
  processPayment: function(paymentInfo) {
    // Add payment processing logic here
  },
  updateOrderStatus: function(status) {
    this.status = status;
    return this.save();
  }
};

module.exports = mongoose.model('Order', OrderSchema);
