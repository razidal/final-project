const { query } = require('../config/db');

async function addItem(cartId, item) {
    const text = 'INSERT INTO shopping_cart_items(cart_id, product_id, quantity, price) VALUES($1, $2, $3, $4) RETURNING *';
    const values = [cartId, item.product_id, item.quantity, item.price];
    const res = await query(text, values);
    return res.rows[0];
}

async function removeItem(cartId, itemId) {
    const text = 'DELETE FROM shopping_cart_items WHERE cart_id=$1 AND item_id=$2 RETURNING *';
    const res = await query(text, [cartId, itemId]);
    return res.rows[0];
}

async function calculateTotalPrice(cartId) {
    const text = 'SELECT SUM(price * quantity) AS total FROM shopping_cart_items WHERE cart_id=$1';
    const res = await query(text, [cartId]);
    return res.rows[0].total;
}

async function getCartItems(cartId) {
    const text = 'SELECT * FROM shopping_cart_items WHERE cart_id = $1';
    const res = await query(text, [cartId]);
    return res.rows;
}

module.exports = {
    addItem,
    removeItem,
    calculateTotalPrice,
    getCartItems,
};
