const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
    host: 'wish.grabweb.in',        // MySQL host
    user: 'httpscoo_deverp',             // MySQL username
    password: 'httpscoo_deverp', // MySQL password
    database: 'httpscoo_deverp', // Database name
    port: 2205                // Custom MySQL port (default is 3306, change if different)
});


async function testConnection() {
    try {
        const [rows, fields] = await pool.query('SELECT 1 + 1 AS solution');
        console.log('Database connection test successful:', rows[0].solution);
    } catch (error) {
        console.error('Database connection test failed:', error);
    }
}

testConnection();

module.exports = pool.promise();
