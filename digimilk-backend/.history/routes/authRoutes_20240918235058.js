const express = require('express');
const router = express.Router();
const { login, getUserById } = require('../controllers/authController'); // Ensure this path is correct

// POST /api/login
const express = require('express');
const { login, protect } = require('../controllers/authController');
const router = express.Router();

// Login Route
router.post('/login', login);

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
