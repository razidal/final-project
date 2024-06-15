const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Define routes
router.put('/:id', productController.updateProduct);
router.get('/:id', productController.getProductById);
router.get('/', productController.getAllProducts);
router.delete('/:id', productController.deleteProduct);

module.exports = router;
