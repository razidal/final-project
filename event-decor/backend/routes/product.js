const express = require('express');
const router = express.Router();
const { addFlower, addDecoration } = require('../controllers/productController');

router.post('/flower', addFlower);
router.post('/decoration', addDecoration);

// More product routes

module.exports = router;
