const mongoose = require('mongoose');

const FlowerSchema = new mongoose.Schema({
  type: { type: String, required: true },
  color: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true }
});

FlowerSchema.methods = {
  getFlowerDetails: function() {
    return {
      type: this.type,
      color: this.color,
      price: this.price,
      quantity: this.quantity
    };
  },
  addFlower: function() {
    // Add logic to add a new flower
  },
  removeFlower: function(flowerId) {
    // Add logic to remove a flower by ID
  },
  updateFlower: function(flowerId, details) {
    // Add logic to update flower details by ID
  }
};

module.exports = mongoose.model('Flower', FlowerSchema);
