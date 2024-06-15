const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true }
});

UserSchema.methods = {
  login: function(password) {
    // Add authentication logic here
  },
  register: function() {
    // Add registration logic here
  }
};

module.exports = mongoose.model('User', UserSchema);
