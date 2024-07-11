const express = require('express');
const {
    createPaymentInfoHandler,
    updatePaymentStatusHandler,
} = require('../controllers/paymentController');

const router = express.Router();

router.post('/', createPaymentInfoHandler);
router.put('/:id', updatePaymentStatusHandler);

module.exports = router;
