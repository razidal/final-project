const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FlowerSchema = new Schema({
  flowerId: { type: String, required: true, unique: true },
  type: { type: String, required: true },
  color: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true }
}, {
  timestamps: true
});

const Flower = mongoose.model('Flower', FlowerSchema);

module.exports = Flower;
