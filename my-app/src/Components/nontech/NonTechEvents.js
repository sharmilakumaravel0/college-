import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NonTechEvents.css';
import { FaArrowLeft } from 'react-icons/fa'; // Importing arrow icon from react-icons

// Event details with different dates and timings for Non-Technical Events
const eventDetails = {
    'Art Exhibition': {
        startDate: 'September 20, 2024',
        startTime: '11:00 AM'
    },
    'Guess the Image': {
        startDate: 'September 21, 2024',
        startTime: '12:00 AM'
    },
    'Dance Performance': {
        startDate: 'September 22, 2024',
        startTime: '2:30 AM'
    },
    'Poster Design': {
        startDate: 'September 23, 2024',
        startTime: '3:00 PM'
    },
    'Cooking without fire': {
        startDate: 'September 24, 2024',
        startTime: '3:30 PM'
    }
};

const NonTechEvents = () => {
    const [activeSection, setActiveSection] = useState('Non-Technical-events-list');
    const [eventName, setEventName] = useState('');
    const navigate = useNavigate();

    const showEventDetails = (eventName) => {
        setEventName(eventName);
        setActiveSection('event-details');
    };

    const goBack = () => {
        navigate('/main-menu'); // Navigate to main menu
    };

    const submitRegistration = (event) => {
        event.preventDefault(); // Prevent the default form submission
        
        const formData = new FormData(event.target);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // Navigate to RegistrationSummary with form data and event title
        navigate('/registration-summary', { state: { formData: data, eventTitle: eventName } });

        // Optionally, reset the form or handle additional logic here
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
        <div>
            {/* Non-Technical Events List */}
            <div id="Non-Technical-events-list" className={`section ${activeSection === 'Non-Technical-events-list' ? 'active' : ''}`}>
                <FaArrowLeft className="go-back-arrow" onClick={goBack} />
                <h1>Non-Technical Events</h1>
                {Object.keys(eventDetails).map(event => (
                    <div key={event} className="event-box" onClick={() => showEventDetails(event)}>
                        {event}
                    </div>
                ))}
            </div>

            {/* Event Details and Registration */}
            <div id="event-details" className={`section ${activeSection === 'event-details' ? 'active' : ''}`}>
                <FaArrowLeft className="go-back-arrow" onClick={() => setActiveSection('Non-Technical-events-list')} />
                <h1 id="event-title">{eventName}</h1>
                <p><strong>Start Date:</strong> {eventDetails[eventName]?.startDate}</p>
                <p><strong>Start Time:</strong> {eventDetails[eventName]?.startTime}</p>

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
    );
};

export default NonTechEvents;
