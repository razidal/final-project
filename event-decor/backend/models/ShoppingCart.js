const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShoppingCartSchema = new mongoose.Schema({
  items: [{ type: Schema.Types.ObjectId, ref: 'ShoppingCartItem', required: true }]
});

ShoppingCartSchema.methods = {
  addItem: function(item) {
    this.items.push(item);
    return this.save();
  },
  removeItem: function(itemId) {
    this.items = this.items.filter(item => item.toString() !== itemId.toString());
    return this.save();
  },
  calculateTotalPrice: function() {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }
};

module.exports = mongoose.model('ShoppingCart', ShoppingCartSchema);
