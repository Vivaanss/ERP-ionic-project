const bcrypt = require('bcryptjs');
const pool = require('../config/db');
const User = require('../models/users'); // Ensure you have imported your User model


// Login function
exports.login = (req, res) => {
    const { username, password } = req.body;
    const query = 'SELECT * FROM users WHERE username = ?';
    
    db.query(query, [username], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });

        const user = results[0];
        if (!user || user.password !== password) {  // Ensure to hash passwords in production
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        
        // Create JWT token or any other session handling logic
        const token = 'dummy-token'; // Replace with actual token generation logic

        res.json({
            token,
            user: {
                id: user.id,
                username: user.username,
                role: user.role // Assuming the role is stored in the `role` field
            }
        });
    });
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
