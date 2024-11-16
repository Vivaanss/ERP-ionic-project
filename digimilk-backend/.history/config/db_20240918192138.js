const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
  host: 'localhost',  // Your MySQL host
  user: 'root',       // Your MySQL username
  password: 'your_password',  // Your MySQL password
  database: 'your_database_name',  // Your database name
});

module.exports = pool.promise();
