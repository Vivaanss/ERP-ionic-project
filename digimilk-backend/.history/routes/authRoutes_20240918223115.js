const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// POST /api/login
router.post('/login', authController.login);
// GET /api/users/:id
router.get('/users/:id', getUserById);

module.exports = router;
