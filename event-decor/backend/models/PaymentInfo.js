const { query } = require('../config/db');

async function createPaymentInfo(paymentInfo) {
    const text = 'INSERT INTO payment_info(order_id, amount, payment_method, payment_status) VALUES($1, $2, $3, $4) RETURNING *';
    const values = [paymentInfo.order_id, paymentInfo.amount, paymentInfo.payment_method, paymentInfo.payment_status];
    const res = await query(text, values);
    return res.rows[0];
}

async function updatePaymentStatus(paymentId, status) {
    const text = 'UPDATE payment_info SET payment_status=$1 WHERE payment_id=$2 RETURNING *';
    const values = [status, paymentId];
    const res = await query(text, values);
    return res.rows[0];
}

module.exports = {
    createPaymentInfo,
    updatePaymentStatus,
};
