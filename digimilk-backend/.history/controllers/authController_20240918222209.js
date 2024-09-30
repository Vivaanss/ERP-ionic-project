const bcrypt = require('bcrypt');
const pool = require('../config/db');

async function addUser(username, password) {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await pool.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword]);
    console.log('User added');
  } catch (err) {
    console.error(err);
  }
}

addUser('testuser', 'testpassword'); // Example usage
