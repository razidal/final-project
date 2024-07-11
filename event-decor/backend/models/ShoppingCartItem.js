const { query } = require('../config/db');

async function getItemTotalPrice(itemId) {
    const text = 'SELECT price * quantity AS total_price FROM shopping_cart_items WHERE item_id = $1';
    const res = await query(text, [itemId]);
    return res.rows[0].total_price;
}

module.exports = {
    getItemTotalPrice,
};
