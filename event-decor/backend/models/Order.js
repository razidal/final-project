const { query } = require('../config/db');

async function createOrder(order) {
    const text = 'INSERT INTO orders(user_id, total_amount, status) VALUES($1, $2, $3) RETURNING *';
    const values = [order.user_id, order.total_amount, order.status];
    const res = await query(text, values);
    return res.rows[0];
}

async function getOrderById(orderId) {
    const text = 'SELECT * FROM orders WHERE order_id = $1';
    const res = await query(text, [orderId]);
    return res.rows[0];
}

async function updateOrder(orderId, order) {
    const text = 'UPDATE orders SET user_id=$1, total_amount=$2, status=$3 WHERE order_id=$4 RETURNING *';
    const values = [order.user_id, order.total_amount, order.status, orderId];
    const res = await query(text, values);
    return res.rows[0];
}

async function deleteOrder(orderId) {
    const text = 'DELETE FROM orders WHERE order_id=$1 RETURNING *';
    const res = await query(text, [orderId]);
    return res.rows[0];
}

module.exports = {
    createOrder,
    getOrderById,
    updateOrder,
    deleteOrder,
};
