import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NonTechEvents.css';
import { FaArrowLeft } from 'react-icons/fa'; // Importing arrow icon from react-icons
import QRCode from 'react-qr-code'; // Import QRCode component

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
            'Art Exhibition': 200,
            'Guess the Image': 100,
            'Dance Performance': 150,
            'Poster Design': 120,
            'Cooking without fire': 180
        };
        setPaymentAmount(paymentAmounts[eventName]);
        setActiveSection('event-details');
    };

    const goBack = () => {
        navigate('/main-menu'); // Navigate to main menu
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

    // Generate the booking URL
    const bookingURL = `https://example.com/register?title=${encodeURIComponent(eventName)}&amount=${paymentAmount}`;

    return (
        <>
            <div className='z'>
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
                        <h2>Register for {eventName} Event</h2>
                        <p><strong>Start Date:</strong> {eventDetails[eventName]?.startDate}</p>
                        <p><strong>Start Time:</strong> {eventDetails[eventName]?.startTime}</p>
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

export default NonTechEvents;
