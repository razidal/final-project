const express = require('express');
const router = express.Router();
const flowerController = require('../controllers/flowerController');

// Define routes
router.post('/', flowerController.addFlower);
router.delete('/:id', flowerController.removeFlower);
router.put('/:id', flowerController.updateFlower);
router.get('/:id', flowerController.getFlowerById);
router.get('/', flowerController.getAllFlowers);

module.exports = router;
