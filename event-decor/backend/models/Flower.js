const { query } = require('../config/db').default;

async function addFlower(flower) {
    const text = 'INSERT INTO flowers(type, color, price, quantity) VALUES($1, $2, $3, $4) RETURNING *';
    const values = [flower.type, flower.color, flower.price, flower.quantity];
    const res = await query(text, values);
    return res.rows[0];
}

async function getFlowers() {
    const res = await query('SELECT * FROM flowers');
    return res.rows;
}

async function updateFlower(id, flower) {
    const text = 'UPDATE flowers SET type=$1, color=$2, price=$3, quantity=$4 WHERE flower_id=$5 RETURNING *';
    const values = [flower.type, flower.color, flower.price, flower.quantity, id];
    const res = await query(text, values);
    return res.rows[0];
}

async function removeFlower(id) {
    const text = 'DELETE FROM flowers WHERE flower_id=$1 RETURNING *';
    const res = await query(text, [id]);
    return res.rows[0];
}

module.exports = {
    addFlower,
    getFlowers,
    updateFlower,
    removeFlower,
};
