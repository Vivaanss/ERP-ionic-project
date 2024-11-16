const bcrypt = require('bcryptjs');
const pool = require('../config/db');

// Login function
exports.login = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    try {
        const [rows] = await pool.query('SELECT * FROM users WHERE username = ?', [username]);

        if (rows.length === 0) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        const user = rows[0];
        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        // User role-based response
        const response = {
            message: 'Login successful',
            user: {
                id: user.id,
                username: user.username,
                role: user.role
            }
        };

        // Customize response based on user role
        if (user.role === 'admin') {
            response.redirect = '/admin-dashboard';
        } else if (user.role === 'manager') {
            response.redirect = '/user-dashboard';
        } else {
            response.redirect = '/user-dashboard';
        }

        res.status(200).json(response);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
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
