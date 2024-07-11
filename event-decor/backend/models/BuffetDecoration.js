const { query } = require('../config/db');

async function addDecoration(decoration) {
    const text = 'INSERT INTO buffet_decorations(name, theme, price, quantity) VALUES($1, $2, $3, $4) RETURNING *';
    const values = [decoration.name, decoration.theme, decoration.price, decoration.quantity];
    const res = await query(text, values);
    return res.rows[0];
}

async function removeDecoration(decorationId) {
    const text = 'DELETE FROM buffet_decorations WHERE decoration_id=$1 RETURNING *';
    const res = await query(text, [decorationId]);
    return res.rows[0];
}

async function updateDecoration(decorationId, decoration) {
    const text = 'UPDATE buffet_decorations SET name=$1, theme=$2, price=$3, quantity=$4 WHERE decoration_id=$5 RETURNING *';
    const values = [decoration.name, decoration.theme, decoration.price, decoration.quantity, decorationId];
    const res = await query(text, values);
    return res.rows[0];
}

async function getDecorationById(decorationId) {
    const text = 'SELECT * FROM buffet_decorations WHERE decoration_id = $1';
    const res = await query(text, [decorationId]);
    return res.rows[0];
}

module.exports = {
    addDecoration,
    removeDecoration,
    updateDecoration,
    getDecorationById,
};
