import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useLocation
import './NonTechEvents.css';
import myQRCode from '../Assets/myQRCode.jpg'; 
import { GiMusicalNotes, GiPartyPopper } from 'react-icons/gi';
import { FaArrowLeft, FaPalette, FaImage, FaUtensils } from 'react-icons/fa';

// Event details with different dates and timings for Non-Technical Events
const eventDetails = {
    'Art Exhibition': {
        startDate: 'September 20, 2024',
        startTime: '11:00 AM',
        icon: <FaPalette /> // Icon for Art Exhibition
    },
    'Guess the Image': {
        startDate: 'September 21, 2024',
        startTime: '12:00 AM',
        icon: <FaImage /> // Icon for Guess the Image
    },
    'Dance Performance': {
        startDate: 'September 22, 2024',
        startTime: '2:30 AM',
        icon: <GiPartyPopper /> // Icon for Dance Performance
    },
    'Singing': {
        startDate: 'September 23, 2024',
        startTime: '3:00 PM',
        icon: <GiMusicalNotes /> // Icon for Singing
    },
    'Cooking without fire': {
        startDate: 'September 24, 2024',
        startTime: '3:30 PM',
        icon: <FaUtensils /> // Icon for Cooking without fire
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
    const [paymentAmount, setPaymentAmount] = useState(null);
    const [paymentCompleted, setPaymentCompleted] = useState(false);
    const [isScanning, setIsScanning] = useState(false);
    const navigate = useNavigate();

    const showEventDetails = (eventName) => {
        setEventName(eventName);
        const paymentAmounts = {
            'Art Exhibition': 200,
            'Guess the Image': 100,
            'Dance Performance': 150,
            'Singing': 120,
            'Cooking without fire': 180
        };
        setPaymentAmount(paymentAmounts[eventName]);
        setActiveSection('event-details');
    };

    const goBack = () => {
        // Check the current location to determine the navigation path
        if (activeSection === 'event-details') {
            setActiveSection('Non-Technical-events-list'); // Go back to the event list
        } else {
            navigate('/events'); // Navigate to the events page
        }
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
            setPaymentCompleted(true);
            alert("Payment Successful!");
          } else {
            alert("Payment not completed. Please scan again.");
          }
        }, 2000);
      };
    

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/registration-summary', { state: { formData, eventTitle: eventName } });
        setFormData({
            collegeName: '',
            studentName: '',
            studentEmail: '',
            phoneNumber: ''
        });
    };


    return (
        <>
            <div className='z'>
                <div>
                    {/* Non-Technical Events List */}
                    <div id="Non-Technical-events-list" className={ `section ${activeSection === 'Non-Technical-events-list' ? 'active' : ''}   `}>
                        <FaArrowLeft className="go-back-arrow" onClick={goBack} />
                        <h1>Non-Technical Events</h1>
                        {Object.keys(eventDetails).map(event => (
                            <div key={event} className="Nontech-event-box" onClick={() => showEventDetails(event)}>
                                <div className="event-icon">{eventDetails[event].icon}</div>
                                <div className="event-name">{event}</div>
                            </div>
                        ))}
                    </div>

                    {/* Event Details and Registration */}
                    <div id="event-details" className={ `section ${activeSection === 'event-details' ? 'active' : ''}   `}>
                        <FaArrowLeft className="go-back-arrow" onClick={goBack} />
                        <h2>Register for {eventName} Event</h2>
                        <p><strong>Start Date:</strong> {eventDetails[eventName]?.startDate}</p>
                        <p><strong>Start Time:</strong> {eventDetails[eventName]?.startTime}</p>
                        <p><strong>Payment Amount:</strong> ₹{paymentAmount}</p>

                        <div className="qr-code-container">
            <img src={myQRCode} alt="QR Code" style={{ width: '128px', height: '128px' }} /><br></br>
            <button className='in' onClick={simulatePaymentScan} disabled={isScanning}>
              {isScanning ? 'Processing Payment...' : 'Scan to Confirm Payment'}
            </button>
          </div><br />
                   
          <form id="registration-form" onSubmit={handleSubmit}>
            <b><label htmlFor="student-name">Student Name: </label></b>
            <input
              type="text"
              id="student-name"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              required
            /><br /><br />

            <b><label htmlFor="student-email">Student Email: </label></b>
            <input
              type="email"
              id="student-email"
              name="studentEmail"
              value={formData.studentEmail}
              onChange={handleChange}
              required
            /><br /><br />

            <b><label htmlFor="phone-number">Phone Number: </label></b>
            <input
              type="text"
              id="phone-number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            /><br /><br />

            <b><label htmlFor="college-name">College Name: </label></b>
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

            {/* Participating College Field */}
            <b><label htmlFor="participating-college">Participating College: </label></b>
            <select
              id="participating-college"
              name="participatingCollege"
              value={formData.participatingCollege}
              onChange={handleChange}
              required
            >
              <option value="">Select participating college</option>
              {['IIT Madras', 'Anna University', 'VIT', 'SRM Institute', 'Presidency College','Loyola College', 'Madras Christian College (MCC)', 'Presidency College', 'SRM Institute of Science and Technology', 'Sathyabama Institute of Science and Technology', 'Stella Maris College', 'Hindustan Institute of Technology and Science (HITS)', 'Vellore Institute of Technology (VIT)', 'Saveetha Institute of Medical and Technical Sciences'].map((college, index) => (
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