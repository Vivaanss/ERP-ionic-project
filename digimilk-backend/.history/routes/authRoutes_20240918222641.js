const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// POST /api/login
router.post('/login', authController.login);
router.post('/login', (req, res, next) => {
  console.log('Login route hit');
  next();
}, authController.login);


module.exports = router;
