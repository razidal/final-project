const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./backend/routes/user');
const orderRoutes = require('./backend/routes/order');
const productRoutes = require('./backend/routes/product');
const buffetDecorationRoutes = require('./backend/routes/buffetDecoration');
const flowerRoutes = require('./backend/routes/flower');
const paymentRoutes = require('./backend/routes/payment');
const reportRoutes = require('./backend/routes/report');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Use routes
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/products', productRoutes);
app.use('/api/buffet-decorations', buffetDecorationRoutes);
app.use('/api/flowers', flowerRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/reports', reportRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
