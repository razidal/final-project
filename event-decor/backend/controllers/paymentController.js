const { createPaymentInfo, updatePaymentStatus } = require('../models/PaymentInfo');

async function createPaymentInfoHandler(req, res) {
    try {
        const paymentInfo = await createPaymentInfo(req.body);
        res.status(201).json(paymentInfo);
    } catch (err) {
        res.status(500).json({ error: 'Error creating payment info' });
    }
}

async function updatePaymentStatusHandler(req, res) {
    try {
        const paymentInfo = await updatePaymentStatus(req.params.id, req.body.status);
        res.status(200).json(paymentInfo);
    } catch (err) {
        res.status(500).json({ error: 'Error updating payment status' });
    }
}

module.exports = {
    createPaymentInfoHandler,
    updatePaymentStatusHandler,
};
