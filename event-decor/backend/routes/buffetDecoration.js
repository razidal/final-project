const express = require('express');
const router = express.Router();
const buffetDecorationController = require('../controllers/buffetDecorationController');

// Define routes
router.post('/', buffetDecorationController.addDecoration);
router.delete('/:id', buffetDecorationController.removeDecoration);
router.put('/:id', buffetDecorationController.updateDecoration);

module.exports = router;
