const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Middleware
app.use(cors());  // Enable CORS for frontend requests
app.use(bodyParser.json());  // Parse incoming JSON requests

// Routes
app.use('/api', authRoutes);  // All authentication-related routes

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
