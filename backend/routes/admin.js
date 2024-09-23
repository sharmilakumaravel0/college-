// routes/admin.js
const express = require('express');
const router = express.Router();
const Registration = require('../models/Registration');



// Handle student registration
router.post('/registrations', async (req, res) => {
    try {
        const { studentName, studentEmail, phoneNumber, collegeName, eventTitle } = req.body;

        // Create a new registration entry
        const newRegistration = new Registration({
            studentName,
            studentEmail,
            phoneNumber,
            collegeName,
            eventTitle
        });

        await newRegistration.save();
        res.status(201).json({ success: true, message: 'Registration successful' });
    } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).json({ success: false, message: 'Error during registration' });
    }
});

// Fetch all student registrations (for Admin Dashboard)
router.get('/registrations', async (req, res) => {
    try {
      const registrations = await Registration.find({});
      if (registrations.length === 0) {
        return res.status(404).json({ message: 'No registrations found' });
      }
      res.json(registrations);
    } catch (error) {
      console.error('Error fetching registrations:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

module.exports = router;