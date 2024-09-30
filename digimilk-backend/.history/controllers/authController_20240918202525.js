const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db.js'); // Your MySQL connection config

// JWT Secret

// Login function
exports.login = async (req, res) => {
    const { username, password } = req.body;
  
    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required' });
    }
  
    try {
      // Replace with your database query logic
      // const [user] = await db.query('SELECT * FROM users WHERE username = ?', [username]);
      
      // Mock response for testing
      const users = [{ id: 1, username: 'admin', password: 'hashedPassword' }];
  
      if (users.length === 0) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }
  
      // Simulate password comparison
      const validPassword = password === 'admin123'; // Replace with bcrypt logic
  
      if (!validPassword) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }
  
      // Generate a token (example, adjust as needed)
      const token = 'mockToken'; // Replace with JWT logic
  
      res.json({ token });
    } catch (err) {
      res.status(500).json({ message: 'Server error', error: err.message });
    }
  };