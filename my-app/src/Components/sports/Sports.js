import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Sports.css';
import { FaArrowLeft } from 'react-icons/fa'; // Importing arrow icon from react-icons

const Sports = () => {
  const [activeSection, setActiveSection] = useState('main-menu');
  const [eventName, setEventName] = useState('');
  const [formData, setFormData] = useState({
    collegeName: '',
    studentName: '',
    studentEmail: '',
    phoneNumber: ''
  });
  const navigate = useNavigate();

  const showEvents = (type) => {
    setActiveSection(type === 'sports' ? 'sports-menu' : type);
  };

  const eventDetails = (eventName) => {
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

  const submitRegistration = (event) => {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    // Navigate to the registration summary page with form data and event title
    navigate('/registration-summary', { state: { formData: data, eventTitle: eventName } });

    // Optionally, reset the form or handle additional logic here
  };

  const eventDetailsData = {
    Football: {
      startDate: '2024-09-15',
      endDate: '2024-09-16',
      startTime: '10:00 AM',
      endTime: '05:00 PM'
    },
    Basketball: {
      startDate: '2024-09-17',
      endDate: '2024-09-17',
      startTime: '11:00 AM',
      endTime: '04:00 PM'
    },
    Volleyball: {
      startDate: '2024-09-18',
      endDate: '2024-09-19',
      startTime: '12:00 PM',
      endTime: '06:00 PM'
    },
    Cricket: {
      startDate: '2024-09-20',
      endDate: '2024-09-21',
      startTime: '09:00 AM',
      endTime: '07:00 PM'
    },
    
    'Carrom Board': {
      startDate: '2024-09-23',
      endDate: '2024-09-23',
      startTime: '10:00 AM',
      endTime: '04:00 PM'
    },
    'Table Tennis': {
      startDate: '2024-09-24',
      endDate: '2024-09-24',
      startTime: '11:00 AM',
      endTime: '03:00 PM'
    },
    Chess: {
      startDate: '2024-09-25',
      endDate: '2024-09-25',
      startTime: '02:00 PM',
      endTime: '06:00 PM'
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


  return (
    <div className='b'>
      <div>
        {/* Main Menu */}
        <div id="main-menu" className={`section ${activeSection === 'main-menu' ? 'active' : ''}`}>
          <FaArrowLeft className="go-back-arrow" onClick={() => navigate('/main-menu')} />
          <h1>Select Event Category</h1>
          <button onClick={() => showEvents('sports-menu')}>Sports</button>
        </div>

        {/* Sports Category Selection */}
        <div id="sports-menu" className={`section ${activeSection === 'sports-menu' ? 'active' : ''}`}>
          <FaArrowLeft className="go-back-arrow" onClick={() => goBack('main-menu')} />
          <h1>Sports Categories</h1>
          <button onClick={() => showEvents('outdoor-games-list')}>Outdoor Games</button>
          <button onClick={() => showEvents('indoor-games-list')}>Indoor Games</button>
        </div>

        {/* Outdoor Games List */}
        <div id="outdoor-games-list" className={`section ${activeSection === 'outdoor-games-list' ? 'active' : ''}`}>
          <FaArrowLeft className="go-back-arrow" onClick={() => goBack('sports-menu')} />
          <h1>Outdoor Games</h1>
          <button onClick={() => eventDetails('Football')}>Football</button>
          <button onClick={() => eventDetails('Basketball')}>Basketball</button>
          <button onClick={() => eventDetails('Volleyball')}>Volleyball</button>
          <button onClick={() => eventDetails('Cricket')}>Cricket</button>
          <button onClick={() => eventDetails('Kho-Kho')}>Kho-Kho</button>
        </div>

        {/* Indoor Games List */}
        <div id="indoor-games-list" className={`section ${activeSection === 'indoor-games-list' ? 'active' : ''}`}>
          <FaArrowLeft className="go-back-arrow" onClick={() => goBack('sports-menu')} />
          <h1>Indoor Games</h1>
          <button onClick={() => eventDetails('Carrom Board')}>Carrom Board</button>
          <button onClick={() => eventDetails('Table Tennis')}>Table Tennis</button>
          <button onClick={() => eventDetails('Chess')}>Chess</button>
        </div>

        {/* Event Details and Registration */}
        <div id="event-details" className={`section ${activeSection === 'event-details' ? 'active' : ''}`}>
          <FaArrowLeft className="go-back-arrow" onClick={() => goBack('sports-menu')} />
          <h1 id="event-title">{eventName}</h1>
          <p><strong>Start Date:</strong> {eventDetailsData[eventName]?.startDate}</p>
          <p><strong>End Date:</strong> {eventDetailsData[eventName]?.endDate}</p>
          <p><strong>Start Time:</strong> {eventDetailsData[eventName]?.startTime}</p>
          
          <h2>Register for this Event</h2>
          <form id="registration-form" onSubmit={submitRegistration}>
           

            <label htmlFor="student-name">Student Name:</label>
            <input type="text" id="student-name" name="studentName" required /><br /><br />

            <label htmlFor="student-email">Student Email:</label>
            <input type="email" id="student-email" name="studentEmail" required /><br /><br />

            <label htmlFor="phone-number">Phone Number:</label>
            <input type="text" id="phone-number" name="phoneNumber" required /><br /><br />
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
    </div>
  );
};

export default Sports;
