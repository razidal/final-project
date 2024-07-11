const express = require('express');
const { createOrderHandler, updateOrderHandler, getOrderHandler, deleteOrderHandler } = require('../controllers/orderController');

const router = express.Router();

router.post('/', createOrderHandler);
router.put('/:id', updateOrderHandler);
router.get('/:id', getOrderHandler);
router.delete('/:id', deleteOrderHandler);

module.exports = router;
