const express = require('express');
const { generateReportHandler } = require('../controllers/reportController');

const router = express.Router();

router.get('/sales', generateReportHandler);

module.exports = router;
