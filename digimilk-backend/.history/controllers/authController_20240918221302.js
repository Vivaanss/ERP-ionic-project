// controllers/authController.js
const bcrypt = require('bcryptjs');
const pool = require('../config/db'); // Import database connection

exports.login = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Fetch user from database
        const [rows] = await pool.query('SELECT * FROM users WHERE username = ?', [username]);
        const user = rows[0];

        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        // Compare password with hashed password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        // Generate a token (implementation depends on your setup)
        // const token = generateToken(user); // Replace with your token generation logic

        res.status(200).json({ message: 'Login successful' /* , token */ });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
