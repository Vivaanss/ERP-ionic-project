const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db.js'); // Your MySQL connection config

// JWT Secret
const JWT_SECRET = 'your_jwt_secret';  // Use a secure secret key for signing JWTs

// Login function
exports.login = async (req, res) => {
  const { username, password } = req.body;

  // Fetch user from database
  const sql = 'SELECT * FROM users WHERE username = ?';
  db.query(sql, [username], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Server error' });
    }

    if (result.length === 0) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const user = result[0];

    // Check if the password matches
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) throw err;

      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      // Generate JWT token for authentication
      const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });

      // Return success response with the token and user data
      res.json({
        message: 'Login successful',
        token,
        user: {
          id: user.id,
          username: user.username,
          role: user.role, // 'admin' or 'user'
        },
      });
    });
  });
};
