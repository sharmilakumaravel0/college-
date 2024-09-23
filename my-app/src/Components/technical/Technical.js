import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaArrowLeft, FaFileAlt, FaLaptopCode, FaUsers, FaCode, FaHourglassStart } from 'react-icons/fa';
import myQRCode from '../Assets/myQRCode.jpg';

const eventDetails = {
    'Paper Presentation': { startDate: 'September 20, 2024', startTime: '11:00 AM', paymentAmount: 100 },
    'Hackathon': { startDate: '2024-09-21', startTime: '12:00 PM' },
    'Group Discussion': { startDate: 'September 22, 2024', startTime: '2:30 PM', paymentAmount: 200 },
    'Coding Debugging': { startDate: 'September 23, 2024', startTime: '3:00 PM', paymentAmount: 250 },
    'Just a Minute (Technical based)': { startDate: 'September 24, 2024', startTime: '3:30 PM', paymentAmount: 120 }
};

const eventIcons = {
    'Paper Presentation': <FaFileAlt />,
    'Hackathon': <FaLaptopCode />,
    'Group Discussion': <FaUsers />,
    'Coding Debugging': <FaCode />,
    'Just a Minute (Technical based)': <FaHourglassStart />
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
        collegeName: '',
        participatingCollege: ''
    });
    const [paymentAmount, setPaymentAmount] = useState(null); // Initialize paymentAmount
    const [isScanning, setIsScanning] = useState(false);
    const navigate = useNavigate();

    const showEventDetails = (event) => {
        setEventName(event);
        setPaymentAmount(eventDetails[event]?.paymentAmount);
        setActiveSection('event-details');
    };

    const goBack = (sectionId) => {
        setActiveSection(sectionId);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const simulatePaymentScan = () => {
        setIsScanning(true);
        setTimeout(() => {
            const isPaid = window.confirm("Confirm that payment has been made via QR code.");
            setIsScanning(false);
            if (isPaid) {
                alert("Payment Successful!");
            } else {
                alert("Payment not completed. Please scan again.");
            }
        }, 2000);
    };

    const submitRegistration = async (event) => {
        event.preventDefault();
        const data = { ...formData, eventTitle: eventName };

        try {
            await axios.post('http://localhost:5002/admin/registrations', data);
            navigate('/registration-summary', { state: { formData, eventTitle: eventName } });
        } catch (error) {
            console.error('Error during registration:', error);
            if (error.response) {
                alert(`Error: ${error.response.data.message || 'Registration failed'}`);
            } else {
                alert('Network error: Unable to reach the server.');
            }
        }
    };

    return (
        <div className='why'>
            {/* Technical Events List */}
            <div id="technical-events-list" className={`section ${activeSection === 'technical-events-list' ? 'active' : ''}`}>
                <FaArrowLeft className="go-back-arrow" onClick={() => navigate('/events')} aria-label="Go back to events" />
                <h1 className='zz'>Technical Events</h1>
                {Object.keys(eventDetails).map(event => (
                    <div key={event} className="technical-event-box" onClick={() => showEventDetails(event)}>
                        {event}
                        <div className="event-icon" aria-hidden="true">
                            {eventIcons[event]}
                        </div>
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
                <img src={myQRCode} alt="QR Code" style={{ width: '128px', height: '128px' }} /><br />
                <button className='in' onClick={simulatePaymentScan} disabled={isScanning}>
                    {isScanning ? 'Processing Payment...' : 'Scan to Confirm Payment'}
                </button>

                <form id="registration-form" onSubmit={submitRegistration}>
                    <b><label htmlFor="student-name">Student Name:  </label></b>
                    <input
                        type="text"
                        id="student-name"
                        name="studentName"
                        value={formData.studentName}
                        onChange={handleChange}
                        required
                    /><br /><br />

                    <b><label htmlFor="student-email">Student Email:  </label></b>
                    <input
                        type="email"
                        id="student-email"
                        name="studentEmail"
                        value={formData.studentEmail}
                        onChange={handleChange}
                        required
                    /><br /><br />

                    <b><label htmlFor="phone-number">Phone Number:  </label></b>
                    <input
                        type="text"
                        id="phone-number"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                    /><br /><br />

                    <b><label htmlFor="college-name">College Name:  </label></b>
                    <select
                        id="college-name"
                        name="collegeName"
                        value={formData.collegeName}
                        onChange={handleChange}
                        required
                    >
                        {colleges.map((college, index) => (
                            <option key={index} value={college}>{college}</option>
                        ))}
                    </select><br /><br />

                    <b><label htmlFor="participating-college">Participating College:  </label></b>
                    <select
                        id="participating-college"
                        name="participatingCollege"
                        value={formData.participatingCollege}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select participating college</option>
                        {colleges.slice(1).map((college, index) => (
                            <option key={index} value={college}>{college}</option>
                        ))}
                    </select><br /><br />

                    <button type="submit">Submit Registration</button>
                </form>
            </div>
        </div>
    );
};

export default Technical;
