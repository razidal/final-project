const Flower = require('../models/Flower');

// Add a new flower
exports.addFlower = async (req, res) => {
  try {
    const newFlower = new Flower(req.body);
    await newFlower.save();
    res.status(201).json({ message: 'Flower added successfully', flower: newFlower });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Remove a flower by ID
exports.removeFlower = async (req, res) => {
  try {
    const flowerId = req.params.id;
    const removedFlower = await Flower.findByIdAndDelete(flowerId);
    if (!removedFlower) {
      return res.status(404).json({ message: 'Flower not found' });
    }
    res.status(200).json({ message: 'Flower removed successfully', flower: removedFlower });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an existing flower by ID
exports.updateFlower = async (req, res) => {
  try {
    const flowerId = req.params.id;
    const updatedFlower = await Flower.findByIdAndUpdate(flowerId, req.body, { new: true });
    if (!updatedFlower) {
      return res.status(404).json({ message: 'Flower not found' });
    }
    res.status(200).json({ message: 'Flower updated successfully', flower: updatedFlower });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a flower by ID
exports.getFlowerById = async (req, res) => {
  try {
    const flowerId = req.params.id;
    const flower = await Flower.findById(flowerId);
    if (!flower) {
      return res.status(404).json({ message: 'Flower not found' });
    }
    res.status(200).json({ flower });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all flowers
exports.getAllFlowers = async (req, res) => {
  try {
    const flowers = await Flower.find();
    res.status(200).json({ flowers });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
