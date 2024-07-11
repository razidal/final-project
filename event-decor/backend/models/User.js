const { query } = require('../config/db');

async function createUser(user) {
    const text = 'INSERT INTO users(username, password, email) VALUES($1, $2, $3) RETURNING *';
    const values = [user.username, user.password, user.email];
    const res = await query(text, values);
    return res.rows[0];
}

async function getUserById(userId) {
    const text = 'SELECT * FROM users WHERE user_id = $1';
    const res = await query(text, [userId]);
    return res.rows[0];
}

async function getUserByUsername(username) {
    const text = 'SELECT * FROM users WHERE username = $1';
    const res = await query(text, [username]);
    return res.rows[0];
}

module.exports = {
    createUser,
    getUserById,
    getUserByUsername,
};
