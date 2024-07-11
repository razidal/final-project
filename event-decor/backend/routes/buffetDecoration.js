const express = require('express');
const {
    addDecorationHandler,
    removeDecorationHandler,
    updateDecorationHandler,
    getDecorationByIdHandler,
} = require('../controllers/buffetDecorationController');

const router = express.Router();

router.post('/', addDecorationHandler);
router.delete('/:id', removeDecorationHandler);
router.put('/:id', updateDecorationHandler);
router.get('/:id', getDecorationByIdHandler);

module.exports = router;
