import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './OnlineEvents.css';
import { FaArrowLeft } from 'react-icons/fa'; // Importing arrow icon from react-icons
import QRCode from 'react-qr-code'; // Import QRCode component

const OnlineEvents = () => {
  const [activeSection, setActiveSection] = useState('online-events-list');
  const [eventName, setEventName] = useState('');
  const [formData, setFormData] = useState({
    collegeName: '',
    studentName: '',
    studentEmail: '',
    phoneNumber: ''
  });
  const [paymentAmount, setPaymentAmount] = useState(null); // Added paymentAmount state
  const navigate = useNavigate();

  const showEventDetails = (eventName) => {
    setEventName(eventName);
    // Set the payment amount based on the event
    const paymentAmounts = {
      'Clickography': 100,
      'Freeze-it (Photography)': 150,
      'Memezone (Meme Creation)': 200,
      'Virtual Reality Quiz': 250,
      'Online Scavenger Hunt': 120
    };
    setPaymentAmount(paymentAmounts[eventName]);
    setActiveSection('event-details');
  };

  const goBack = (sectionId) => {
    if (sectionId === 'main-menu') {
      navigate('/main-menu'); // Navigate to main menu
    } else {
      setActiveSection(sectionId); // Switch to the specified section
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Navigate to RegistrationSummary with form data and event title
    navigate('/registration-summary', { state: { formData, eventTitle: eventName } });

    // Optionally, reset the form or handle additional logic here
    setFormData({
      collegeName: '',
      studentName: '',
      studentEmail: '',
      phoneNumber: ''
    });
  };

  // Event details including dates only
  const eventDetailsData = {
    'Clickography': {
      startDate: '2024-09-30',
      endDate: '2024-09-30'
    },
    'Freeze-it (Photography)': {
      startDate: '2024-10-01',
      endDate: '2024-10-01'
    },
    'Memezone (Meme Creation)': {
      startDate: '2024-10-02',
      endDate: '2024-10-02'
    },
    'Virtual Reality Quiz': {
      startDate: '2024-10-03',
      endDate: '2024-10-03'
    },
    'Online Scavenger Hunt': {
      startDate: '2024-10-04',
      endDate: '2024-10-04'
    }
  };

  // Generate the booking URL
  const bookingURL = `https://example.com/register?title=${encodeURIComponent(eventName)}&amount=${paymentAmount}`;

  return (
    <>
      <div className='f'>
        <div className="container">
          {/* Online Events List */}
          <div id="online-events-list" className={`section ${activeSection === 'online-events-list' ? 'active' : ''}`}>
            <FaArrowLeft className="go-back-arrow" onClick={() => goBack('main-menu')} />
            <h1>Online Events</h1>
            {Object.keys(eventDetailsData).map(event => (
              <div key={event} className="event-box" onClick={() => showEventDetails(event)}>
                {event}
              </div>
            ))}
          </div>

          {/* Event Details and Registration */}
          <div id="event-details" className={`section ${activeSection === 'event-details' ? 'active' : ''}`}>
            <FaArrowLeft className="go-back-arrow" onClick={() => goBack('online-events-list')} />
            
            <h2>Register for {eventName} Event</h2>
            <p><strong>Start Date:</strong> {eventDetailsData[eventName]?.startDate}</p>
            <p><strong>End Date:</strong> {eventDetailsData[eventName]?.endDate}</p>
            <p><strong>Payment Amount:</strong> ₹{paymentAmount}</p>

            {/* QR Code for payment */}
            <div className="qr-code-container">
              <QRCode value={bookingURL} size={128} />
            </div><br />

            <form id="registration-form" onSubmit={handleSubmit}>
              <label htmlFor="student-name">Student Name:</label>
              <input
                type="text"
                id="student-name"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                required
              /><br /><br />

              <label htmlFor="student-email">Student Email:</label>
              <input
                type="email"
                id="student-email"
                name="studentEmail"
                value={formData.studentEmail}
                onChange={handleChange}
                required
              /><br /><br />

              <label htmlFor="phone-number">Phone Number:</label>
              <input
                type="text"
                id="phone-number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              /><br /><br />

              <label htmlFor="college-name">College Name:</label>
              <select
                id="college-name"
                name="collegeName"
                value={formData.collegeName}
                onChange={handleChange}
                required
              >
                <option value="">Select your college</option>
                {['Indian Institute of Technology Madras (IIT Madras)', 'Anna University', 'Loyola College', 'Madras Christian College (MCC)', 'Presidency College', 'SRM Institute of Science and Technology', 'Sathyabama Institute of Science and Technology', 'Stella Maris College', 'Hindustan Institute of Technology and Science (HITS)', 'Vellore Institute of Technology (VIT)', 'Saveetha Institute of Medical and Technical Sciences'].map((college, index) => (
                  <option key={index} value={college}>{college}</option>
                ))}
              </select><br /><br />

              <button type="submit">Submit Registration</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnlineEvents;
