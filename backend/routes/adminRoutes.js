const express = require('express');
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin'); // Adjust the path according to your structure
const router = express.Router();

// Secret key for JWT
const JWT_SECRET = 'your_jwt_secret'; // Use a strong secret in production

router.post('/admin/register', async (req, res) => {
    const { username, email, password } = req.body;

    console.log('Received data:', req.body); // Log the received data

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newAdmin = new Admin({ username, email, password: hashedPassword });
        await newAdmin.save();
        res.status(201).json({ success: true, message: 'Registration successful!' });
    } catch (error) {
        console.error('Registration Error:', error);
        res.status(500).json({ success: false, message: 'Error registering admin', error }); // Include the error
    }
});

// Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });
    if (!admin || !(await admin.comparePassword(password))) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: admin._id }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ success: true, token });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Login failed', error: error.message });
  }
});

module.exports = router;
