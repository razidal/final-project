const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

// Define routes
router.post('/', paymentController.createPayment);
router.get('/:id', paymentController.getPaymentById);
router.put('/:id', paymentController.updatePaymentStatus);
router.get('/', paymentController.getAllPayments);
router.delete('/:id', paymentController.deletePayment);

module.exports = router;
