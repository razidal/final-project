const { addDecoration, removeDecoration, updateDecoration, getDecorationById } = require('../models/BuffetDecoration');

async function addDecorationHandler(req, res) {
    try {
        const decoration = await addDecoration(req.body);
        res.status(201).json(decoration);
    } catch (err) {
        res.status(500).json({ error: 'Error adding decoration' });
    }
}

async function removeDecorationHandler(req, res) {
    try {
        const decoration = await removeDecoration(req.params.id);
        res.status(200).json(decoration);
    } catch (err) {
        res.status(500).json({ error: 'Error removing decoration' });
    }
}

async function updateDecorationHandler(req, res) {
    try {
        const decoration = await updateDecoration(req.params.id, req.body);
        res.status(200).json(decoration);
    } catch (err) {
        res.status(500).json({ error: 'Error updating decoration' });
    }
}

async function getDecorationByIdHandler(req, res) {
    try {
        const decoration = await getDecorationById(req.params.id);
        res.status(200).json(decoration);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching decoration' });
    }
}

module.exports = {
    addDecorationHandler,
    removeDecorationHandler,
    updateDecorationHandler,
    getDecorationByIdHandler,
};
