const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PaymentInfoSchema = new Schema({
  paymentId: { type: String, required: true, unique: true },
  orderId: { type: Schema.Types.ObjectId, ref: 'Order', required: true },
  amount: { type: Number, required: true },
  paymentMethod: { type: String, required: true, enum: ['Credit Card', 'Debit Card', 'PayPal', 'Bank Transfer'] },
  paymentStatus: { type: String, required: true, enum: ['Pending', 'Completed', 'Failed'] }
}, {
  timestamps: true
});

const PaymentInfo = mongoose.model('PaymentInfo', PaymentInfoSchema);

module.exports = PaymentInfo;
