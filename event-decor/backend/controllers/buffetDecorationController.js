const BuffetDecoration = require('../models/BuffetDecoration');

// Add a new buffet decoration
exports.addDecoration = async (req, res) => {
  try {
    const newDecoration = new BuffetDecoration(req.body);
    await newDecoration.save();
    res.status(201).json({ message: 'Buffet decoration added successfully', decoration: newDecoration });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Remove a buffet decoration by ID
exports.removeDecoration = async (req, res) => {
  try {
    const decorationId = req.params.id;
    const removedDecoration = await BuffetDecoration.findByIdAndDelete(decorationId);
    if (!removedDecoration) {
      return res.status(404).json({ message: 'Buffet decoration not found' });
    }
    res.status(200).json({ message: 'Buffet decoration removed successfully', decoration: removedDecoration });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an existing buffet decoration by ID
exports.updateDecoration = async (req, res) => {
  try {
    const decorationId = req.params.id;
    const updatedDecoration = await BuffetDecoration.findByIdAndUpdate(decorationId, req.body, { new: true });
    if (!updatedDecoration) {
      return res.status(404).json({ message: 'Buffet decoration not found' });
    }
    res.status(200).json({ message: 'Buffet decoration updated successfully', decoration: updatedDecoration });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
