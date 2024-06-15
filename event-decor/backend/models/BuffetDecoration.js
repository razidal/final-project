const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BuffetDecorationSchema = new Schema({
  decorationId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  theme: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true }
}, {
  timestamps: true
});

const BuffetDecoration = mongoose.model('BuffetDecoration', BuffetDecorationSchema);

module.exports = BuffetDecoration;
