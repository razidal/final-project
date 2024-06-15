const mongoose = require('mongoose');

const BuffetDecorationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  theme: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true }
});

BuffetDecorationSchema.methods = {
  getDecorationDetails: function() {
    return {
      name: this.name,
      theme: this.theme,
      price: this.price,
      quantity: this.quantity
    };
  },
  addDecoration: function() {
    // Add logic to add a new decoration
  },
  removeDecoration: function(decorationId) {
    // Add logic to remove a decoration by ID
  },
  updateDecoration: function(decorationId, details) {
    // Add logic to update decoration details by ID
  }
};

module.exports = mongoose.model('BuffetDecoration', BuffetDecorationSchema);
