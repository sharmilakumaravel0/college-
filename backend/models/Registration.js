// models/Registration.js
const mongoose = require('mongoose');

const RegistrationSchema = new mongoose.Schema({
    studentName: { type: String, required: true },
    studentEmail: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    collegeName: { type: String, required: true },
    eventTitle: { type: String, required: true },
    registrationDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Registration', RegistrationSchema);