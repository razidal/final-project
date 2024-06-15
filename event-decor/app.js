const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');
const orderRoutes = require('./routes/order');
const productRoutes = require('./routes/product');
const buffetDecorationRoutes = require('./routes/buffetDecoration');
const flowerRoutes = require('./routes/flower');
const paymentRoutes = require('./routes/payment');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Use routes
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/products', productRoutes);
app.use('/api/buffet-decorations', buffetDecorationRoutes);
app.use('/api/flowers', flowerRoutes);
app.use('/api/payments', paymentRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
