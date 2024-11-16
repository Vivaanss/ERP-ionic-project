// POST /api/login
const express = require('express');
const router = express.Router();
const { login, getUserById,protect,register } = require('../controllers/authController'); // Ensure this path is correct


// Login Route
router.post('/login', login);
router.post('/register', register);
router.get('/users/:id', getUserById);

// Protected Route for Admin Only
router.get('/admin-dashboard', protect(['admin']), (req, res) => {
  res.json({ message: 'Welcome Admin!' });
});

// Protected Route for Users and Admins
router.get('/user-dashboard', protect(['user', 'admin']), (req, res) => {
  res.json({ message: 'Welcome User!' });
});
// Protected Route for Users and Admins
router.get('/prod-dashboard', protect(['production', 'admin']), (req, res) => {
  res.json({ message: 'Welcome Productor!' });
});
// Protected Route for Users and Admins
router.get('/inventory', protect(['inventory', 'admin']), (req, res) => {
  res.json({ message: 'Welcome Inventor!' });
});

// GET /api/users/:id

module.exports = router;
