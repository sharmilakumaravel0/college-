const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  eventName: { type: String, required: true },
  eventDate: { type: String, required: true },
  eventDescription: { type: String, required: true },
  organizer: { type: String, required: true },
  maxParticipants: { type: Number, required: true },
  registeredStudents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }]
});

module.exports = mongoose.model('Event', eventSchema);