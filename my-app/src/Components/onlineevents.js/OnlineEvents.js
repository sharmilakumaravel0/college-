import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './OnlineEvents.css';
import { FaArrowLeft } from 'react-icons/fa'; // Importing arrow icon from react-icons

const OnlineEvents = () => {
  const [activeSection, setActiveSection] = useState('online-events-list');
  const [eventName, setEventName] = useState('');
  const [formData, setFormData] = useState({
    collegeName: '',
    studentName: '',
    studentEmail: '',
    phoneNumber: ''
  });
  const navigate = useNavigate();

  const showEventDetails = (eventName) => {
    setEventName(eventName);
    setActiveSection('event-details');
  };

  const goBack = (sectionId) => {
    if (sectionId === 'main-menu') {
      navigate('/main-menu'); // Navigate to main menu
    } else {
      setActiveSection(sectionId); // Switch to the specified section
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

  return (
    <div className="container">
      {/* Online Events List */}
      <div id="online-events-list" className={`section ${activeSection === 'online-events-list' ? 'active' : ''}`}>
        <FaArrowLeft className="go-back-arrow" onClick={() => goBack('main-menu')} />
        <h1>Online Events</h1>
        <div className="event-box" onClick={() => showEventDetails('Clickography')}>Clickography</div>
        <div className="event-box" onClick={() => showEventDetails('Freeze-it (Photography)')}>Freeze-it (Photography)</div>
        <div className="event-box" onClick={() => showEventDetails('Memezone (Meme Creation)')}>Memezone (Meme Creation)</div>
        <div className="event-box" onClick={() => showEventDetails('Virtual Reality Quiz')}>Virtual Reality Quiz</div>
        <div className="event-box" onClick={() => showEventDetails('Online Scavenger Hunt')}>Online Scavenger Hunt</div>
      </div>

      {/* Event Details and Registration */}
      <div id="event-details" className={`section ${activeSection === 'event-details' ? 'active' : ''}`}>
        <FaArrowLeft className="go-back-arrow" onClick={() => goBack('online-events-list')} />
        <h1 id="event-title">{eventName}</h1>

        <p><strong>Start Date:</strong> {eventDetailsData[eventName]?.startDate}</p>
        <p><strong>End Date:</strong> {eventDetailsData[eventName]?.endDate}</p>

        <h2>Register for this Event</h2>
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
          <label htmlFor="phone-number">Collage Name:</label>
           <select id="college-name" name="collegeName" required>
              {colleges.map((college, index) => (
                <option key={index} value={college}>{college}</option>
              ))}
            </select><br /><br />

          <button type="submit">Submit Registration</button>
        </form>
      </div>
    </div>
  );
};

export default OnlineEvents;
