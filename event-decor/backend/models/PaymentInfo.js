const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PaymentInfoSchema = new mongoose.Schema({
  orderId: { type: Schema.Types.ObjectId, ref: 'Order', required: true },
  amount: { type: Number, required: true },
  paymentMethod: { type: String, required: true },
  paymentStatus: { type: String, required: true }
});

PaymentInfoSchema.methods = {
  processPayment: function() {
    // Add logic to process payment
  },
  updatePaymentStatus: function(status) {
    this.paymentStatus = status;
    return this.save();
  }
};

module.exports = mongoose.model('PaymentInfo', PaymentInfoSchema);
