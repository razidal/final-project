const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');

// Define routes
router.get('/sales', reportController.getSalesReport);

module.exports = router;
