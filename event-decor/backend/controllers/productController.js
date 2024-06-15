const Flower = require('../models/Flower');
const BuffetDecoration = require('../models/BuffetDecoration');

// Update a product (Flower or BuffetDecoration)
exports.updateProduct = async (req, res) => {
  try {
    const productType = req.body.productType;
    const productId = req.params.id;
    let updatedProduct;

    if (productType === 'Flower') {
      updatedProduct = await Flower.findByIdAndUpdate(productId, req.body, { new: true });
    } else if (productType === 'BuffetDecoration') {
      updatedProduct = await BuffetDecoration.findByIdAndUpdate(productId, req.body, { new: true });
    }

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({ message: 'Product updated successfully', product: updatedProduct });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a product by ID (Flower or BuffetDecoration)
exports.getProductById = async (req, res) => {
  try {
    const productType = req.query.productType;
    const productId = req.params.id;
    let product;

    if (productType === 'Flower') {
      product = await Flower.findById(productId);
    } else if (productType === 'BuffetDecoration') {
      product = await BuffetDecoration.findById(productId);
    }

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all products (Flowers and BuffetDecorations)
exports.getAllProducts = async (req, res) => {
  try {
    const flowers = await Flower.find();
    const buffetDecorations = await BuffetDecoration.find();

    res.status(200).json({ flowers, buffetDecorations });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a product (Flower or BuffetDecoration)
exports.deleteProduct = async (req, res) => {
  try {
    const productType = req.query.productType;
    const productId = req.params.id;
    let deletedProduct;

    if (productType === 'Flower') {
      deletedProduct = await Flower.findByIdAndDelete(productId);
    } else if (productType === 'BuffetDecoration') {
      deletedProduct = await BuffetDecoration.findByIdAndDelete(productId);
    }

    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({ message: 'Product deleted successfully', product: deletedProduct });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
