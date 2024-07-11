const { addFlower, removeFlower, updateFlower, getFlowerById } = require('../models/Flower');

async function addFlowerHandler(req, res) {
    try {
        const flower = await addFlower(req.body);
        res.status(201).json(flower);
    } catch (err) {
        res.status(500).json({ error: 'Error adding flower' });
    }
}

async function removeFlowerHandler(req, res) {
    try {
        const flower = await removeFlower(req.params.id);
        res.status(200).json(flower);
    } catch (err) {
        res.status(500).json({ error: 'Error removing flower' });
    }
}

async function updateFlowerHandler(req, res) {
    try {
        const flower = await updateFlower(req.params.id, req.body);
        res.status(200).json(flower);
    } catch (err) {
        res.status(500).json({ error: 'Error updating flower' });
    }
}

async function getFlowerByIdHandler(req, res) {
    try {
        const flower = await getFlowerById(req.params.id);
        res.status(200).json(flower);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching flower' });
    }
}

module.exports = {
    addFlowerHandler,
    removeFlowerHandler,
    updateFlowerHandler,
    getFlowerByIdHandler,
};
