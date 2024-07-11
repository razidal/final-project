const express = require('express');
const {
    addItemHandler,
    removeItemHandler,
    calculateTotalPriceHandler,
    getCartItemsHandler,
} = require('../controllers/shoppingCartController');

const router = express.Router();

router.post('/:cartId/items', addItemHandler);
router.delete('/:cartId/items/:itemId', removeItemHandler);
router.get('/:cartId/total', calculateTotalPriceHandler);
router.get('/:cartId/items', getCartItemsHandler);

module.exports = router;
