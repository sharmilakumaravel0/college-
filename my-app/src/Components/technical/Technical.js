// src/Components/Technical.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import QRCode from 'react-qr-code';
import { FaArrowLeft } from 'react-icons/fa';

const eventDetails = {
  'Paper Presentation': {
      startDate: 'September 20, 2024',
      startTime: '11:00 AM',
      paymentAmount: 100
  },
  'Poster Presentation': {
      startDate: 'September 21, 2024',
      startTime: '12:00 PM',
      paymentAmount: 150
  },
  'Group Discussion': {
      startDate: 'September 22, 2024',
      startTime: '2:30 PM',
      paymentAmount: 200
  },
  'Coding Debugging': {
      startDate: 'September 23, 2024',
      startTime: '3:00 PM',
      paymentAmount: 250
  },
  'Just a Minute (Technical based)': {
      startDate: 'September 24, 2024',
      startTime: '3:30 PM',
      paymentAmount: 120
  }
};

const colleges = [
  'Select your college',
  'Indian Institute of Technology Madras (IIT Madras)',
  'Anna University',
  'Loyola College',
  'Madras Christian College (MCC)',
  'Presidency College',
  'SRM Institute of Science and Technology',
  'Sathyabama Institute of Science and Technology',
  'Stella Maris College',
  'Hindustan Institute of Technology and Science (HITS)',
  'Vellore Institute of Technology (VIT)',
  'Saveetha Institute of Medical and Technical Sciences'
];


const Technical = () => {
    const [activeSection, setActiveSection] = useState('technical-events-list');
    const [eventName, setEventName] = useState('');
    const [formData, setFormData] = useState({
        studentName: '',
        studentEmail: '',
        phoneNumber: '',
        collegeName: ''
    });
    const [paymentAmount, setPaymentAmount] = useState(null);
    const navigate = useNavigate();
    const [qrCodeValue, setQrCodeValue] = useState(''); // Initialize state for QR code value

    
    const showEventDetails = (event) => {
        setEventName(event);
        setPaymentAmount(eventDetails[event]?.paymentAmount);
        setActiveSection('event-details');
    };
    const goBack = (sectionId) => {
      setActiveSection(sectionId);
  };


  const submitRegistration = async (event) => {
    event.preventDefault();

    const data = { ...formData, eventTitle: eventName };

    try {
        const response = await axios.post('http://localhost:5002/admin/registrations', data);
        navigate('/registration-summary', { state: { formData, eventTitle: eventName } });
    } catch (error) {
        // Check for error messages
        const errorMessage = error.response?.data?.message || error.message || 'Registration failed';
        alert(errorMessage);
    }
};
    const bookingURL = `https://example.com/register?title=${encodeURIComponent(eventName)}&amount=${paymentAmount}`;
    return (
      <div>
      {/* Technical Events List */}
      <div id="technical-events-list" className={`section ${activeSection === 'technical-events-list' ? 'active' : ''}`}>
          <FaArrowLeft className="go-back-arrow" style={{ display: 'none' }} />
          <h1>Technical Events</h1>
          {Object.keys(eventDetails).map(event => (
              <div key={event} className="event-box" onClick={() => showEventDetails(event)}>
                  {event}
              </div>
          ))}
      </div>

      {/* Event Details and Registration */}
      <div id="event-details" className={`section ${activeSection === 'event-details' ? 'active' : ''}`}>
          <FaArrowLeft className="go-back-arrow" onClick={() => goBack('technical-events-list')} />
          <h2>Register for {eventName} Event</h2>
          <p><strong>Start Date:</strong> {eventDetails[eventName]?.startDate}</p>
          <p><strong>Start Time:</strong> {eventDetails[eventName]?.startTime}</p>
          <p><strong>Payment Amount:</strong> ₹{paymentAmount}</p>

          <div className="qr-code-container">
    <QRCode value={bookingURL} size={128} />
  </div><br />

  <div className="registration-container">
    <form id="registration-form" onSubmit={submitRegistration}>
      <label htmlFor="student-name">Student Name:</label>
      <input type="text" id="student-name" name="studentName" required /><br /><br />

      <label htmlFor="student-email">Student Email:</label>
      <input type="email" id="student-email" name="studentEmail" required /><br /><br />

      <label htmlFor="phone-number">Phone Number:</label>
      <input type="text" id="phone-number" name="phoneNumber" required /><br /><br />

      <label htmlFor="college-name">College Name:</label>
      <select id="college-name" name="collegeName" required>
        {colleges.map((college, index) => (
          <option key={index} value={college}>{college}</option>
        ))}
      </select><br /><br />

      <button type="submit">Submit Registration</button>
    </form>
  </div>
</div>
</div>
);
}

export default Technical;