const { addItem, removeItem, calculateTotalPrice, getCartItems } = require('../models/ShoppingCart');

async function addItemHandler(req, res) {
    try {
        const item = await addItem(req.params.cartId, req.body);
        res.status(201).json(item);
    } catch (err) {
        res.status(500).json({ error: 'Error adding item to cart' });
    }
}

async function removeItemHandler(req, res) {
    try {
        const item = await removeItem(req.params.cartId, req.params.itemId);
        res.status(200).json(item);
    } catch (err) {
        res.status(500).json({ error: 'Error removing item from cart' });
    }
}

async function calculateTotalPriceHandler(req, res) {
    try {
        const total = await calculateTotalPrice(req.params.cartId);
        res.status(200).json({ total });
    } catch (err) {
        res.status(500).json({ error: 'Error calculating total price' });
    }
}

async function getCartItemsHandler(req, res) {
    try {
        const items = await getCartItems(req.params.cartId);
        res.status(200).json(items);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching cart items' });
    }
}

module.exports = {
    addItemHandler,
    removeItemHandler,
    calculateTotalPriceHandler,
    getCartItemsHandler,
};
