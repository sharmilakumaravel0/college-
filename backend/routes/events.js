const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

// Create an event (admin only)
router.post('/create', async (req, res) => {
  const { eventName, eventDate, eventDescription, organizer, maxParticipants } = req.body;

  const newEvent = new Event({
    eventName,
    eventDate,
    eventDescription,
    organizer,
    maxParticipants
  });

  await newEvent.save();
  res.json({ message: 'Event created successfully!' });
});

// Get all events
router.get('/', async (req, res) => {
  const events = await Event.find();
  res.json(events);
});

module.exports = router;