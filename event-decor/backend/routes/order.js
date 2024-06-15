const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Define routes
router.post('/', orderController.createOrder);
router.get('/:id', orderController.getOrderById);
router.get('/', orderController.getAllOrders);
router.put('/:id', orderController.updateOrder);
router.delete('/:id', orderController.deleteOrder);

module.exports = router;
