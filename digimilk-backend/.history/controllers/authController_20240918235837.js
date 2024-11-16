const bcrypt = require('bcryptjs');
const pool = require('../config/db');
const User = require('../models/users'); // Ensure you have imported your User model


// Login function
exports.login = async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const user = users.find(u => u.username === username);
      if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      // Create JWT Token
      const token = jwt.sign(
        { userId: user.id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );
  
      res.json({ token, role: user.role });
    } catch (error) {
      res.status(500).json({ message: `Server error1`  ${error} });
    }
  };
  
  // Middleware to protect routes based on roles
  exports.protect = (roles = []) => {
    return (req, res, next) => {
      const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
      if (!token) {
        return res.status(401).json({ message: 'Not authorized' });
      }
  
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        
        if (roles.length && !roles.includes(req.user.role)) {
          return res.status(403).json({ message: 'Access denied' });
        }
  
        next();
      } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
      }
    };
  };

// Fetch user data function
exports.getUserById = async (req, res) => {
    const { id } = req.params;

    try {
        const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);

        if (rows.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};
