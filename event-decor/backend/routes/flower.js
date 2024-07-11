const express = require('express');
const { addFlowerHandler, removeFlowerHandler, updateFlowerHandler, getFlowerByIdHandler } = require('../controllers/flowerController');

const router = express.Router();

router.post('/', addFlowerHandler);
router.delete('/:id', removeFlowerHandler);
router.put('/:id', updateFlowerHandler);
router.get('/:id', getFlowerByIdHandler);

module.exports = router;
