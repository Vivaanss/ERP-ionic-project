const express = require('express');
const router = express.Router();
const { login, getUserById } = require('../controllers/authController'); // Ensure this path is correct

// POST /api/login
router.post('/login', login);
// GET /api/users/:id
router.get('/users/:id', getUserById);

module.exports = router;
