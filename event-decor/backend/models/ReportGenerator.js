const { query } = require('../config/db');

async function generateSalesReport() {
    const text = 'SELECT * FROM orders';  
    const res = await query(text);
    return res.rows;
}

module.exports = {
    generateSalesReport,
};
