const Flower = require('../models/Flower');
const BuffetDecoration = require('../models/BuffetDecoration');

exports.addFlower = async (req, res) => {
  const { type, color, price } = req.body;

  try {
    const flower = new Flower({ type, color, price });
    await flower.save();
    res.json(flower);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.addDecoration = async (req, res) => {
  const { name, theme, price } = req.body;

  try {
    const decoration = new BuffetDecoration({ name, theme, price });
    await decoration.save();
    res.json(decoration);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// More product controller methods like update, delete, get etc.
