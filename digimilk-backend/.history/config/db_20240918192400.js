const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
    host: 'wish.grabweb.in',        // MySQL host
    user: 'httpscoo_deverp',             // MySQL username
    password: 'httpscoo_deverp', // MySQL password
    database: 'httpscoo_deverp', // Database name
    port: 2205                // Custom MySQL port (default is 3306, change if different)
});


module.exports = pool.promise();
