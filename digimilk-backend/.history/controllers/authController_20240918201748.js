const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db.js'); // Your MySQL connection config

// JWT Secret
const JWT_SECRET = 'your_jwt_secret';  // Use a secure secret key for signing JWTs

// Login function
exports.login = async (req, res) => {
    const { username, password } = req.body;
  
    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required' });
    }
  
    try {
      const [user] = await db.query('SELECT * FROM users WHERE username = ?', [username]);
  
      if (user.length === 0) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }
  
      const validPassword = await bcrypt.compare(password, user[0].password);
  
      if (!validPassword) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }
  
      // Generate a token (example, adjust as needed)
      const token = jwt.sign({ id: user[0].id, role: user[0].role }, 'your-secret-key', { expiresIn: '1h' });
  
      res.json({ token });
    } catch (err) {
      res.status(500).json({ message: 'Server error', error: err.message });
    }
  };
