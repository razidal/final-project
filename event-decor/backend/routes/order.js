const express = require('express');
const router = express.Router();
const { createOrder } = require('../controllers/orderController');

router.post('/', createOrder);

// More order routes

module.exports = router;
