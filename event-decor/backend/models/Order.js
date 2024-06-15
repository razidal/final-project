const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShoppingCartItemSchema = new Schema({
  itemId: { type: String, required: true },
  product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },  // References either Flower or BuffetDecoration
  quantity: { type: Number, required: true },
  price: { type: Number, required: true }
});

const OrderSchema = new Schema({
  orderId: { type: String, required: true, unique: true },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },  // Reference to User
  items: [ShoppingCartItemSchema],
  totalAmount: { type: Number, required: true },
  status: { type: String, required: true, enum: ['Pending', 'Processed', 'Shipped', 'Delivered', 'Cancelled'] },
  paymentInfo: { type: Schema.Types.ObjectId, ref: 'PaymentInfo', required: true }  // Reference to PaymentInfo
}, {
  timestamps: true
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;
