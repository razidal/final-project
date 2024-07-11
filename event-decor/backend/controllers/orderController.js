const { createOrder, updateOrderStatus, getOrderById, deleteOrder } = require('../models/Order');

async function createOrderHandler(req, res) {
    try {
        const order = await createOrder(req.body);
        res.status(201).json(order);
    } catch (err) {
        res.status(500).json({ error: 'Error creating order' });
    }
}

async function updateOrderHandler(req, res) {
    try {
        const order = await updateOrderStatus(req.params.id, req.body.status);
        res.status(200).json(order);
    } catch (err) {
        res.status(500).json({ error: 'Error updating order' });
    }
}

async function getOrderHandler(req, res) {
    try {
        const order = await getOrderById(req.params.id);
        res.status(200).json(order);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching order' });
    }
}

async function deleteOrderHandler(req, res) {
    try {
        await deleteOrder(req.params.id);
        res.status(200).json({ message: 'Order deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Error deleting order' });
    }
}

module.exports = {
    createOrderHandler,
    updateOrderHandler,
    getOrderHandler,
    deleteOrderHandler,
};
