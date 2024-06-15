const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShoppingCartItemSchema = new mongoose.Schema({
  product: { type: Schema.Types.ObjectId, refPath: 'productModel', required: true },
  productModel: { type: String, required: true, enum: ['Flower', 'BuffetDecoration'] },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true }
});

ShoppingCartItemSchema.methods = {
  getItemTotalPrice: function() {
    return this.price * this.quantity;
  }
};

module.exports = mongoose.model('ShoppingCartItem', ShoppingCartItemSchema);
