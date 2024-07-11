const { getProductById, updateProduct, deleteProduct } = require('../models/Product');

async function getProductHandler(req, res) {
    try {
        const product = await getProductById(req.params.id);
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching product' });
    }
}

async function updateProductHandler(req, res) {
    try {
        const product = await updateProduct(req.params.id, req.body);
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ error: 'Error updating product' });
    }
}

async function deleteProductHandler(req, res) {
    try {
        await deleteProduct(req.params.id);
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Error deleting product' });
    }
}

module.exports = {
    getProductHandler,
    updateProductHandler,
    deleteProductHandler,
};
