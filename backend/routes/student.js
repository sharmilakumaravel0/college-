const express = require('express');
const router = express.Router();
const Student = require('../models/Student');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Student registration
router.post('/register', async (req, res) => {
  const { name, email, password, contactNumber } = req.body;
  
  // Encrypt password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newStudent = new Student({
    name,
    email,
    password: hashedPassword,
    contactNumber
  });

  await newStudent.save();
  res.json({ message: 'Student registered successfully!' });
});

// Student login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const student = await Student.findOne({ email });
  if (!student) return res.status(400).json({ message: 'Invalid credentials' });

  const isMatch = await bcrypt.compare(password, student.password);
  if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

  const token = jwt.sign({ id: student._id }, 'secretKey', { expiresIn: '1h' });
  res.json({ token });
});

module.exports = router;