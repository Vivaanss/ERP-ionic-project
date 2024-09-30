const bcrypt = require('bcrypt');
const saltRounds = 10; // Number of salt rounds for hashing

// Function to hash a password
async function hashPassword(password) {
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    console.log('Hashed Password:', hashedPassword);
  } catch (error) {
    console.error('Error hashing password:', error);
  }
}

// Example password
const password = 'prod@1234';
hashPassword(password);
