const express = require('express');
const { getProductHandler, updateProductHandler, deleteProductHandler } = require('../controllers/productController');

const router = express.Router();

router.get('/:id', getProductHandler);
router.put('/:id', updateProductHandler);
router.delete('/:id', deleteProductHandler);

module.exports = router;
