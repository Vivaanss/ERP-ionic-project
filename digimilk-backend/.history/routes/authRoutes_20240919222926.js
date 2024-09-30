// POST /api/login
const express = require('express');
const router = express.Router();
const { login, getUserById,protect } = require('../controllers/authController'); // Ensure this path is correct


// Login Route
router.post('/login', login);
router.post('/register', register);

// Protected Route for Admin Only
router.get('/admin', protect(['admin']), (req, res) => {
  res.json({ message: 'Welcome Admin!' });
});

// Protected Route for Users and Admins
router.get('/user', protect(['user', 'admin']), (req, res) => {
  res.json({ message: 'Welcome User!' });
});

// GET /api/users/:id
router.get('/users/:id', getUserById);

module.exports = router;
